import { DevicesState } from "../../../types/devices";

const initialState: DevicesState = {
  devices: [
    {
      id: 1,
      name: "Iphone 12 Pro",
      screen: '6.1" all-screen OLED display',
      camera: "Pro camera system",
      capacity: 128,
      extraCapacity: 128,
      orderDate: 1669724168322,
    },
    {
      id: 2,
      name: "Iphone 11 Pro",
      screen: '5.1" all-screen OLED display',
      camera: "Pro camera system",
      capacity: 64,
      extraCapacity: 64,
      orderDate: 1660700100322,
    },
  ],
};

export const devicesReducer = (
  state = initialState,
  action: any
): DevicesState => {
  switch (action.type) {
    default:
      return state;
  }
};
