import {useForm} from "react-hook-form";
import {useState} from "react";


function AboutPage({onAddUser,onClearUsers}) {
    const {
        register,
        handleSubmit,
        reset
    }=useForm();
    // const [users, setUsers] = useState([]);

    function create(values){
        onAddUser(values);
        reset();
    }
    // function deleteUsers(index){
    //     const updatedUsers=[];
    //
    //     for (let i=0; i<users.length; i++){
    //         if (i !== index){
    //             updatedUsers.push(users[i]);
    //         }
    //     }
    //     setUsers(updatedUsers);
    // }
    // function clean(){
    //     setUsers([]);
    // }


    return (
        <form onSubmit={handleSubmit(create)}>
            <input type="text" placeholder="Name" {...register("name", { required: true })} />
            <input type="text" placeholder="Surname" {...register("surname", { required: true })} />
            <input type="email" placeholder="Email" {...register("email", { required: true })} />
            <input type="number" placeholder="Phone number" {...register("phone", { required: true })} />
            <input type="text" placeholder="Website" {...register("website")} />
            <button type="submit">Create a tablet</button>
            <button type="button" onClick={onClearUsers}>Clean a tablet</button>
        </form>
    );
}

export default AboutPage;