import React, { useContext, useState } from 'react'
import { FirebaseContext } from '../store/Contexts'
import "./form.css"
// import { Firebase } from '../firebase/config'


function Form() {
    const { firebase } = useContext(FirebaseContext)
    const [regNo, setRegNo] = useState(0)
    const [teamname, setTName] = useState("")
    const [teamCaptain, setTeamCaptain] = useState("")
    const [contactTC, setContactTC] = useState("")
    const [emailTC, setEmailTC] = useState("")
    const [teamMemb1, setTeamMemb1] = useState("")
    const [contactMemb1, setContactMemb1] = useState("")
    const [emailMemb1, setEmailMemb1] = useState("")
    const [teamMemb2, setTeamMemb2] = useState("")
    const [contactMemb2, setContactMemb2] = useState("")
    const [emailMemb2, setEmailMemb2] = useState("")
    const [teamMemb3, setTeamMemb3] = useState("")
    const [contactMemb3, setContactMemb3] = useState("")
    const [emailMemb3, setEmailMemb3] = useState("")

    // const [image, setImage] = useState('');

    // const upload = () => {
    //     if (image == null)
    //         return;
    //      Firebase.storage.ref(`/images/${image.name}`).put(image)
    //         .on("state_changed", alert("success"), alert);
    // }
    firebase.firestore().collection('Registration Number').doc('unique').get().then((res) => {
        setRegNo(res.data().number)
    })

    const handleSubmit = () => {
        // e.preventDefault()
        firebase.firestore().collection('Registration Number').doc('unique').update({
            number: regNo + 1
        })
        // firebase.storage().ref('/image/name').put(image).then(({ ref }) => {
        //     ref.getDownloadURL().then((url) => {
        //         console.log(url);
        //     })
        // })
        firebase.firestore().collection('TEAMS').add(
            {
                "Registration number": regNo,
                "Team Name": teamname,
                "Team Captain": teamCaptain,
                "Contact team cap": contactTC,
                "Email team cap": emailTC,
                "Tema memb 1": teamMemb1,
                "Contact team memb 1": contactMemb1,
                "Email team memb 1": emailMemb1,
                "Tema memb 2": teamMemb2,
                "Contact team memb 2": contactMemb2,
                "Email team memb 2": emailMemb2,
                "Tema memb 3": teamMemb3,
                "Contact team memb 3": contactMemb3,
                "Email team memb 3": emailMemb3
            }).then((alert) => {
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
                                <label> Resitration number</label><br /><br />
                                <input type="number" name="name" value={regNo} required='required' disabled /><br /><br />
                                <label> Team Name</label><br /><br />
                                <input type="text" name="name" value={teamname} onChange={(e) => setTName(e.target.value)} placeholder='Name' required='required' /><br /><br />
                                <label> Team Captain</label><br /><br />
                                <input type="text" name="name" value={teamCaptain} onChange={(e) => setTeamCaptain(e.target.value)} placeholder='Team Captian' required /><br />
                            </div>
                            <div className='form-field'>
                                <label> Contact (Team Captain)</label><br /><br />
                                <input type="number" name="name" value={contactTC} onChange={(e) => setContactTC(e.target.value)} placeholder='Phone Number' required /><br /><br />
                                <label> Email (Team Captain)</label><br /><br />
                                <input type="email" name="name" value={emailTC} onChange={(e) => setEmailTC(e.target.value)} placeholder='yourname@gamil.com' required /><br />
                            </div>
                            <div className='form-field'>
                                <label> Team Member 1</label><br /><br />
                                <input type="text" name="name" value={teamMemb1} onChange={(e) => setTeamMemb1(e.target.value)} placeholder='Name' required /><br /><br />
                                <label> Contact (Team Member 1)</label><br /><br />
                                <input type="number" name="name" value={contactMemb1} onChange={(e) => setContactMemb1(e.target.value)} placeholder='Phone Number' required /><br /><br />
                                <label> Email (Team Member 1)</label><br /><br />
                                <input type="email" name="name" value={emailMemb1} onChange={(e) => setEmailMemb1(e.target.value)} placeholder='yourname@gamil.com' required /><br />
                            </div>
                            <div className='form-field'>
                                <label> Team Member 2</label><br /><br />
                                <input type="text" name="name" value={teamMemb2} onChange={(e) => setTeamMemb2(e.target.value)} placeholder='Name' /><br /><br />
                                <label> Contact (Team Member 2)</label><br /><br />
                                <input type="number" name="name" value={contactMemb2} onChange={(e) => setContactMemb2(e.target.value)} placeholder='Phone Number' /><br /><br />
                                <label> Email (Team Member 2)</label><br /><br />
                                <input type="email" name="name" value={emailMemb2} onChange={(e) => setEmailMemb2(e.target.value)} placeholder='yourname@gamil.com' /><br />
                            </div>
                            <div className='form-field'>
                                <label> Team Member 3</label><br /><br />
                                <input type="text" name="name" value={teamMemb3} onChange={(e) => setTeamMemb3(e.target.value)} placeholder='Name' /><br /><br />
                                <label> Contact (Team Member 3)</label><br /><br />
                                <input type="text" name="name" value={contactMemb3} onChange={(e) => setContactMemb3(e.target.value)} placeholder='Phone Number' /><br /><br />
                                <label> Email (Team Member 3)</label><br /><br />
                                <input type="text" name="name" value={emailMemb3} onChange={(e) => setEmailMemb3(e.target.value)} placeholder='yourname@gamil.com' /><br />
                            </div>
                            <div>
                                <label htmlFor="">PDF File</label>
                                {/* <img height="100px" width="200px" alt="" src={image ? URL.createObjectURL(image) : null} /> */}
                                <input type="file"/* onChange={(e) => { setImage(e.target.files[0]) }}*/ />
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