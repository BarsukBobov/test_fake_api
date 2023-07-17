import React from "react";
import {useActions} from "../hooks/useActions";
import {logout} from "../store/action_creator/login";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {Navigate} from "react-router";

const PrivatePage: React.FC = () =>{
    const {token} = useTypedSelector(state=>state.login)
    const {logout} = useActions()
    function exit(){
        logout()
    }
    return (
        <div>
            {!token?<Navigate to="/login"/>:
            <nav className="h-[50px] flex justify-end px-5 bg-blue-400 text-white">
                <button className="rounded-2xl w-20  hover:shadow-lg  active:-translate-y-px" onClick={exit}>
                    Выход
                </button>
            </nav>
            }
        </div>
    )
}
export default PrivatePage;