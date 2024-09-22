import React, {FC, useEffect, useState} from 'react'
import {DEFAULT_PIZZA, PizzaContext, WebSocketContext} from "../contexts/webSocketContext";
import {API_URL, K_ID, K_PRIVATE, K_PUBLIC, WS_API_URL, WS_URL} from "../const/general.constants";
import {DEFAULT_FRIENDS_LOADING_LIMIT, DEFAULT_RESTORE_ENERGY_PER_SECOND} from "../const/app.constants";
import {
  IClient, IInventory,
  PIZZA_STATUS_TYPES,
  WebSocketPaginator,
  WebSocketProfile,
  WebSocketWallet
} from "../types/webSocketTypes.d";
import {LOADING_TYPES} from "../types/app.d";
import {FRIEND} from "../types/friends.d";
import {clientStateToProfileState} from "../common/utils/formatters";
import {
  ITEM_TYPE,
  ITEMS_TYPES,
  RARITY_TYPES, rarityToSortIndex,
  websocketRarityToItemRarity,
  websocketTypeToItemType
} from "../types/items.d";

type Props = {
  children: React.ReactNode;
};

export const WebSocketProvider: FC<Props> = ({ children }: Props) => {
  const [timer, setTimer] = useState<number>(0);
  // @ts-ignore
  const webApp = window.Telegram?.WebApp;
  const [profile, setProfile] = useState<WebSocketProfile>({
    uid: null,
    firstname: '',
    lastname: ''
  })
  const [wallet, setWallet] = useState<WebSocketWallet>({
    points: 25000,
    pointsHourlyRate: 0,
    rank: 0,
    rankThreshold: 100000,
    energyLevel: 1,
    tapThreshold: 1,
    tapLevel: 0,
    energyThreshold: 0,
    availableEnergy: 0,
    refPointsToParent: 0,
    refPointsToParentIfPremium: 0,
    refPointsToInvitee: 0,
    pointsBonusHourlyRate: 0
  });
  const [pizzaState, setPizzaState] = useState<PIZZA_STATUS_TYPES>(PIZZA_STATUS_TYPES.NOT_LOADED);
  const [friends, setFriends] = useState<{
    loaded: LOADING_TYPES;
    meta: WebSocketPaginator;
    list: FRIEND[];
  }>({
    loaded: LOADING_TYPES.NOT_LOADED,
    meta: {
      limit: DEFAULT_FRIENDS_LOADING_LIMIT
    },
    list: []
  });

  const [inventory, setInventory] = useState<{
    loaded: LOADING_TYPES;
    list: ITEM_TYPE[];
  }>({
    loaded: LOADING_TYPES.NOT_LOADED,
    list: [
      {
        icon: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.OUTERWEAR}_0_0`,
        image: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.OUTERWEAR}_0_0`,
        type: ITEMS_TYPES.OUTERWEAR,
        selected: false,
        rarity: RARITY_TYPES.BASE,
        collection: 0,
        energyBonus: 0,
        id: 0,
        incomeBonus: 0,
        pointsBonusHourlyRate: 0,
        pointsHourlyRate: 0,
        price: 0,
        tapBonus: 0
      },
      {
        icon: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.PANTS}_0_0`,
        image: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.PANTS}_0_0`,
        type: ITEMS_TYPES.PANTS,
        selected: false,
        rarity: RARITY_TYPES.BASE,
        collection: 0,
        energyBonus: 0,
        id: 0,
        incomeBonus: 0,
        pointsBonusHourlyRate: 0,
        pointsHourlyRate: 0,
        price: 0,
        tapBonus: 0
      },
      {
        icon: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.SHOES}_0_0`,
        image: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.SHOES}_0_0`,
        type: ITEMS_TYPES.SHOES,
        selected: false,
        rarity: RARITY_TYPES.BASE,
        collection: 0,
        energyBonus: 0,
        id: 0,
        incomeBonus: 0,
        pointsBonusHourlyRate: 0,
        pointsHourlyRate: 0,
        price: 0,
        tapBonus: 0
      },
      {
        icon: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.WEAPON}_0_0`,
        image: `inventory_${RARITY_TYPES.BASE}_${ITEMS_TYPES.WEAPON}_0_0`,
        type: ITEMS_TYPES.WEAPON,
        selected: false,
        rarity: RARITY_TYPES.BASE,
        collection: 0,
        energyBonus: 0,
        id: 0,
        incomeBonus: 0,
        pointsBonusHourlyRate: 0,
        pointsHourlyRate: 0,
        price: 0,
        tapBonus: 0
      },
    ]
  });

  const init = () => {
    if (DEFAULT_PIZZA) {
      setPizzaState(PIZZA_STATUS_TYPES.INITIALIZING);
      if (!DEFAULT_PIZZA.Initialized && pizzaState === PIZZA_STATUS_TYPES.NOT_LOADED) {
        DEFAULT_PIZZA.Init({
          wsURL: WS_URL,
          apiURL: API_URL,
          wsapiURL: WS_API_URL,
          kID: K_ID,
          kPublic: K_PUBLIC,
          kPrivate: K_PRIVATE,
          onWSOpen: onWSOpenCallback,
          onWSClose: onWSCloseCallback,
        });
      }
    }
  }

  const onWSOpenCallback = () => {
    setPizzaState(PIZZA_STATUS_TYPES.WS_OPENED);
    auth();
  }

  const onWSCloseCallback = () => {
    setPizzaState(PIZZA_STATUS_TYPES.WS_DISCONNECTED);
  }

  const getProfile = () => {
    DEFAULT_PIZZA.WSMe((envelope, message) => {
      setProfile({
        uid: message.client?.uid || null,
        firstname: message.client?.firstname || '',
        lastname: message.client?.lastname || ''
      })
    });
  }

  const getInvitees = (paginator: WebSocketPaginator) => {
    setFriends(prev => ({
      ...prev,
      loaded: LOADING_TYPES.LOADING,
    }));

    DEFAULT_PIZZA.WSInvitees(paginator, (envelope, message) => {
      const newFriends: FRIEND[] = message.clients?.map((client: IClient) => {
        return {
          uid: client.uid || null,
          firstname: client.firstname || '',
          lastname: client.lastname || '',
          state: clientStateToProfileState(client.state)
        }
      }) || [];
      setFriends(prev => ({
        loaded: LOADING_TYPES.LOADED,
        meta: message.meta || {limit: DEFAULT_FRIENDS_LOADING_LIMIT},
        list: [...prev.list, ...newFriends]
      }));
    });
  }

  const getInventory = () => {
    setInventory(prev => ({
      ...prev,
      loaded: LOADING_TYPES.LOADING,
    }));

    DEFAULT_PIZZA.WSInventoryItemsParams((envelope, message) => {
      const newInventory: ITEM_TYPE[] = [];

      Object.keys(message).forEach((mes: string) => {
        if (mes.includes('Items')) {
          const tempItemArray: IInventory[] = message[mes];
          const itemData: string[] = mes.split('_');
          // @ts-ignore
          const itemType: ITEMS_TYPES = websocketTypeToItemType[itemData[2]];
          // @ts-ignore
          const itemRarity: RARITY_TYPES =  websocketRarityToItemRarity[itemData[1]];
          const itemCollection: number = Number(itemData[3] || 0);
          // @ts-ignore
          const sortIndex: number = rarityToSortIndex[itemRarity];

          if (tempItemArray.length) {
            tempItemArray.forEach((tempItem: IInventory) => {
              newInventory.push({
                icon: `inventory_${itemRarity}_${itemType}_${itemCollection}_${tempItem.ID}`,
                image: `inventory_${itemRarity}_${itemType}_${itemCollection}_${tempItem.ID}`,
                type: itemType,
                selected: false,
                rarity: itemRarity,
                collection: itemCollection,
                energyBonus: tempItem.EnergyBonus || 0,
                id: tempItem.ID || 0,
                incomeBonus: tempItem.IncomeBonus || 0,
                pointsBonusHourlyRate: tempItem.PointsHourlyRate || 0,
                pointsHourlyRate: tempItem.PointsHourlyRate || 0,
                price: tempItem.Price || 0,
                tapBonus: tempItem.TapBonus || 0,
                sortIndex: sortIndex
              })
            })
          }
        }
      });

      newInventory.sort((a,b) => (a.sortIndex || 0) -  (b.sortIndex || 0));

      setInventory(prev => ({
        loaded: LOADING_TYPES.LOADED,
        list: [...inventory.list, ...newInventory]
      }));

    });
  }

  const sendTap = () => {
    const newPoints = wallet.points + 1;

    setWallet(prev => ({
      ...prev,
      points: prev.points + prev.tapThreshold,
      availableEnergy: prev.availableEnergy - prev.tapThreshold,
    }));

    if (newPoints >= wallet.rankThreshold) {
      getState();
    }

    DEFAULT_PIZZA.WSTap();
  }

  const auth = () => {
    if (!webApp.initDataUnsafe || !webApp.initData) return;
    try {
      DEFAULT_PIZZA.WSAuth({
        provider: "tg",
        username: String(webApp.initDataUnsafe.user.id),
        password: String(webApp.initData),
      }, (envelope, message) => {
        if (message.client) {
          setPizzaState(PIZZA_STATUS_TYPES.USER_AUTHORIZED);
          getState();
          getProfile();
        } else {
          setPizzaState(PIZZA_STATUS_TYPES.FAILED_AUTHORIZATION);
        }
      });
    } catch (e) {
      console.log('WSAuth error', e);
    }
  }

  const getState = () => {
    if (!DEFAULT_PIZZA) return;

    DEFAULT_PIZZA.WSState();
  }

  const setWalletParams = (params: WebSocketWallet) => {
    setWallet(prev => ({
      ...prev,
      points: params.points,
      pointsHourlyRate: params.pointsHourlyRate,
      rank: params.rank,
      rankThreshold: params.rankThreshold,
      energyLevel: params.energyLevel,
      tapThreshold: params.tapThreshold,
      tapLevel: params.tapLevel,
      energyThreshold: params.energyThreshold,
      availableEnergy: !params.availableEnergy && !prev.availableEnergy ? params.energyThreshold : prev.availableEnergy,
      refPointsToParent: params.refPointsToParent,
      refPointsToParentIfPremium: params.refPointsToParentIfPremium,
      refPointsToInvitee: params.refPointsToInvitee,
      pointsBonusHourlyRate: params.pointsBonusHourlyRate
    }));
  }

  useEffect(() => {
    const s = timer + wallet.tapThreshold;

    if (s >= 10) {
      setTimer(0);
      getState();
      return () => {};
    }

    const intervalId: ReturnType<typeof setTimeout> = setTimeout(() => {
      setTimer(s);
      setWallet(prev => ({
        ...prev,
        availableEnergy: prev.availableEnergy + DEFAULT_RESTORE_ENERGY_PER_SECOND <= prev.energyThreshold ? prev.availableEnergy + DEFAULT_RESTORE_ENERGY_PER_SECOND : prev.energyThreshold ,
      }));
    }, 1000);

    return () => {
      clearTimeout(intervalId);
    };
  }, [timer]);

  return (
    <WebSocketContext.Provider
      value={{
        pizzaState,
        profile,
        wallet,
        friends,
        init,
        setPizzaState,
        setWalletParams,
        sendTap,
        getInvitees,
        getInventory,
        inventory
    }}
    >
      <PizzaContext.Provider value={DEFAULT_PIZZA}>
        {children}
      </PizzaContext.Provider>
    </WebSocketContext.Provider>
)
}
