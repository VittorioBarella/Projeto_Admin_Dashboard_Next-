import { useContext } from 'react';
import AppContext from '../context/app-context';

const useAppData = () => useContext(AppContext) 

export default useAppData