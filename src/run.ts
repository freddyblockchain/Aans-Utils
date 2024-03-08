
import algosdk, { mnemonicToSecretKey } from 'algosdk';
import { getAanAccountAddress, getAanNames } from './get-names';
import { createAanTransaction } from '..';

(async () => {
    try {
        
      const aanNames = await getAanNames();
      console.log("names: " + aanNames);
  
      const aanAccountAddress = await getAanAccountAddress("aebfgoaebfgoaebfgoaebfgoaeb");
      console.log("found account: " + aanAccountAddress);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  })();
