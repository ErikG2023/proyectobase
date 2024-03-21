// import { create } from 'zustand'

// interface State{
//     isOpenSideMenu: boolean,

//     openSideMenu: () => void;
//     closeSideMenu: () => void;
// }

// export const UseZustandStore = create<State>()((set) => ({

//     isOpenSideMenu: false,
//     openSideMenu: () => set({isOpenSideMenu:true}),
//     closeSideMenu: () => set({isOpenSideMenu:false}),

// }));

import { create } from "zustand";

interface State {
    isOpenSideMenu: boolean;
    toggleSideMenu: () => void;
}

export const UseZustandStore = create<State>((set) => ({
    isOpenSideMenu: false,
    toggleSideMenu: () =>
        set((state) => ({ isOpenSideMenu: !state.isOpenSideMenu })),
}));
