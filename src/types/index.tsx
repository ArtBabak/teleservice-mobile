import React, { FC } from "react";

export interface IDevice {
  id: number;
  name: string;
  screen: string;
  camera: string;
  capacity: number;
  extraCapacity: number;
  orderDate: number;
}

export interface IUser {
  email: string;
  password: string;
}

export interface ITicket {
  num: number;
  topic: string;
  message: string;
}
