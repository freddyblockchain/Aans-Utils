
import algosdk, { mnemonicToSecretKey } from 'algosdk';
import { createAun } from './create-aun';
import { getAunAccountAddress, getAunNames} from './get-names';
import { deleteAun } from './delete-aun';

(async () => {
    try {
        
      let account = mnemonicToSecretKey("topple cruel neutral rose glory glad prevent output box snap notice child actor poem forget ship luxury vanish tank mention cloth rally sheriff abstract alert")

      await deleteAun("new naame 2", account) 
    
      const aunNames = await getAunNames();
      console.log(aunNames);
  
      const aunAccountAddress = await getAunAccountAddress("freddys wallet");
      console.log(aunAccountAddress);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  })();
