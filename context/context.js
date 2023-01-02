import { createContext, useContext, useState, useEffect } from "react";
import { createContract } from "../build/contracts/constants";
import { useAccount } from "wagmi";
import truncateEthAddress from "truncate-eth-address";
import { toast } from "web3";
import Web3 from "web3";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [userAddress, setUserAddress] = useState("");

  const { address } = useAccount();
  useEffect(() => {
    setUserAddress(truncateEthAddress(address));
  }, [address]);

  const getAllImages = async () => {};

  const uploadImages = async () => {
    if (!address) return;
    const contract = createContract();

    getAllImages();
  };

  const tipOwner = async () => {};

  return (
    <AppContext.Provider value={{ userAddress, posts }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
