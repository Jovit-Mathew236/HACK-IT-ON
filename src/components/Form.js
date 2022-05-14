import React,{useState} from 'react'
import "./form.css"
import { Firebase } from '../firebase/config'

function Form() {
    const [teamname, setTName] = useState("")
    const [teamCaptain, setTeamCaptain] = useState("")
    const [contactTC, setContactTC] = useState("")
    const [emailTC, setEmailTC] = useState("")
    const [teamMemb1, setTeamMemb1] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        Firebase.firestore().collection('users').add(
            {
            Name: teamname,

        }).then((alert)=>{
            console.log("suscces");
        });
    }
    return (
        <div>
            <div className='form'>
                <div>
                    <form>
                        <div className='form-inp-field'>
                            <div className='form-field'>
                                <label> Team Name</label><br />
                                <input type="text" name="name" value={teamname} onChange={(e) => setTName(e.target.value)} placeholder='Name' required /><br /><br />
                                <label> Email:</label><br />
                                <input type="text" name="name" placeholder='yourname@gmail.com' required /><br />
                            </div>
                            <div className='form-field'>
                                <label> Collage:</label><br />
                                <input type="text" name="name" placeholder='College' required /><br /><br />
                                <label> Ph no:</label><br />
                                <input type="text" name="name" placeholder='Phone number' required /><br />
                            </div>
                            <div className='form-field'>
                                <label> Department:</label><br />
                                <input type="text" name="name" placeholder='Dept' required /><br /><br />
                                <label> Items:</label><br />
                                <input type="text" name="name" placeholder='Item' required /><br />
                            </div>

                        </div>

                        <input type="submit" value="Submit" id='submit' onClick={handleSubmit} />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Form