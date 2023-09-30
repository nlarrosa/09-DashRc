import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../contexts/UserContext";


export const useSweet = ( confirmBtnColor, cancelBtnColor) => {

    const { inactiveUser, state } = useContext(UserContext);

    // useEffect(() => {
    //     if(state.msg.lenth > 0){
    //         Swal.fire(
    //             'Eliminado!',
    //             state.msg,
    //             'success'
    //         )
    //     }
    // }, [state.msg]);


    const onDeleteSweet = async (id) => {
        Swal.fire({
            title: 'Estas Seguro?',
            text: `Que deseas eliminar el usuario ${id} !`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#fb5252',
            cancelButtonColor: '#1976d2',
            confirmButtonText: 'Eliminar!'
        }).then((result) => {
            if (result.isConfirmed) {

                inactiveUser(id);
                
            }
        })
    }

  return {
    onDeleteSweet,
  }
}


