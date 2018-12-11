import React, { Component } from "react";



class contactinfo extends Component {
    render() {
        return (
            < section >
                < div className=" contactinfo " >
                    < a className=" contactinfo__single " target=" _blank " >
                        < i className=" ion-ios-location-outline contactinfo__icon " > </ i >
                        < span className=" contactinfo__title " > Mexico city </ span >
                    </ a>
                    < a href=" # " className=" contactinfo__single " target=" _blank " >
                        < i className=" ion-ios-email-outline contactinfo__icon " > </ i >
                        < span className=" contactinfo__title " > suzettemr90@gmail.com </ span >
                    </ a>
                    < a href=" # " className=" contactinfo__single " target=" _blank " >
                        < i className=" ion-social-github-outline contactinfo__icon " > </ i >
                        < span className=" contactinfo__title " > GirlSuzette </ span >
                    </ a >
                    < a href=" # " className=" contactinfo__single " target=" _blank " >
                        < i className=" ion-social-linkedin-outline contactinfo__icon " > </ i >
                        < span className=" contactinfo__title " > suzette-mulato-ramirez- </ span >
                    </ a >
                </ div >
            </ section >
        );
    }
}

export default contactinfo;