import { useEffect, useState } from "react";
import { Nav } from "../components/Nav/Nav";

import axios from "axios";
import { IAnimal } from "../models/IAnimal";

export const Start = () => {
  return (
    <>
      <Nav></Nav>
      <h1>Start h1</h1>
    </>
  );
};
