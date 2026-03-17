import {createContext, useContext} from 'react';

const ServiceContext = createContext();

export const useServices = () => useContext(ServiceContext);

export default ServiceContext;