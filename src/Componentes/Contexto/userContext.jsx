import React, { createContext, useEffect, useState } from 'react';

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [cuentaId, setCuentaId] = useState("")

  useEffect(() => {

    if (cuentaId != "") {
      localStorage.setItem('cuentaId', JSON.stringify(cuentaId))
    }

  }, [cuentaId])

  const actualizarCuentaId = (idActualizado) => {

    if (idActualizado != cuentaId) {
      setCuentaId(idActualizado) 
    }
  }

  return (
    <userContext.Provider value={{ actualizarCuentaId, cuentaId }}>
      {children}
    </userContext.Provider>
  )
}
export default userContext