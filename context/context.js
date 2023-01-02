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

  const uploadImage = async (imgUrl, caption) => {
    if (!address) return;
    const contract = createContract();

    try {
      const data = contract.methods.uploadImage(imgUrl, caption).send({
        from: userAddress,
        gas: 3000000,
      });
      await toast.promise(data, {
        pending: "Uploading image... This can take a minute",
        success: "Image uploaded successfully! ",
        error: "Something went wrong. Please try again",
      });

      getAllImages();
    } catch (error) {
      console.error(error.message);
    }
  };

  const tipOwner = async () => {};

  return (
    <AppContext.Provider value={{ userAddress, posts, uploadImage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
