import React from 'react';
import CardSolde from './components/CardSolde';
import './Styles/body.css'
import logo from './logo.svg'
import icon1 from './Group 1365.png'
import icon2 from './Content image.png'
import icon3 from './Thumbnail.png'
import icon4 from './Thumbnail-1.png'
import icon5 from './atom_quickicon_deals.png'
import icon6 from './atom_quickicon_ozen.png'
import icon7 from './atom_secondaryicon_line_outlined.png'
import icon8 from './atom_secondaryicon_mylives.png'
import icon9 from './SOS.png'
import icon10 from './content.png'
import icon11 from './atom_quickicon_paybill.png'
import icon12 from './atom_secondaryicon_myservices.png'
import icon13 from './atom_secondaryicon_mytickets.png'
import icon14 from './atom_secondaryicon_faq.png'
import icon15 from './atom_secondaryicon_bookspot.png'
import icon17 from './atom_quickicon_parainnage.png'
import icon16 from './Capture_d_écran_2023-11-29_à_10.50_1-removebg-preview.png'
import icon18 from './Functional_UI - ic_Donation 1.png'
import icon19 from './Functional_UI - ic_Donation 1-1.png'
import Card from './components/Card';
import News from './components/News';
const Body = () => {
    const dataAction = [
        { title: "Recharger", icon: icon1 },
        { title: "Acheter un pass", icon: icon2 },
        { title: "Transfert d'argent", icon: icon3 },
        { title: "Paiement Marchand", icon: icon4 },

        { title: "Promo", icon: icon5 },
        { title: "O'zen", icon: icon6 },
        { title: "Ma SIM", icon: icon7 },
        { title: "Streaming", icon: icon8 },

        { title: "SOS", icon: icon9 },
        { title: "Transfert credit", icon: icon10 },
        { title: "Facture Orange", icon: icon11 },
        { title: "Gerer ma Sim", icon: icon7 },

        { title: "Mes Services", icon: icon12 },
        { title: "Tickets", icon: icon13 },

        { title: "Assistance en ligne", icon: icon14 },
        { title: "Trouver une agence", icon: icon15 },
        { title: "Pharmacie de garde", icon: icon16 },
        { title: "Parrainage", icon: icon17 },
    ]


    return (
        <div className='body'>
            <h3 className='bienvenue'>Bienvenue, +225 0758024250</h3>
            <div className='section-solde'>
                <CardSolde icon={icon18} title="Compte principal" solde="*******" />
                <CardSolde icon={icon19} title="Solde principal" solde="*******" />
            </div>
            <div className='actions'>
                <Card title={dataAction[0].title} icon={dataAction[0].icon} />
                <Card title={dataAction[1].title} icon={dataAction[1].icon} />
                <Card title={dataAction[2].title} icon={dataAction[2].icon} />
                <Card title={dataAction[3].title} icon={dataAction[3].icon} />
            </div>
            <div className='Services'>
                <h2>Services</h2>
                <div className='container-services'>
                    <div className='container-news'>
                        <News title="CAF 2023 Macth Centre" />
                    </div>
                    <div className='services-actions'>
                        <div className='ligne-services'>
                            <Card title={dataAction[4].title} icon={dataAction[4].icon} />
                            <Card title={dataAction[5].title} icon={dataAction[5].icon} />

                        </div>
                        <div className='ligne-services ls'>
                            <Card title={dataAction[6].title} icon={dataAction[6].icon} />
                            <Card title={dataAction[7].title} icon={dataAction[7].icon} />
                        </div>
                    </div> 
                </div>
            </div>
            <div>
                <h2>Payer & Transferer</h2>
                <div className='actions'>
                    <Card title={dataAction[8].title} icon={dataAction[8].icon} />
                    <Card title={dataAction[9].title} icon={dataAction[9].icon} />
                    <Card title={dataAction[10].title} icon={dataAction[10].icon} />
                    <Card title={dataAction[11].title} icon={dataAction[11].icon} />
                </div>
            </div>
            <div>
                <h2>Mes achats</h2>
                <div className='achats'>
                    <Card title={dataAction[12].title} icon={dataAction[12].icon} />
                    <Card title={dataAction[13].title} icon={dataAction[13].icon} />
                </div>
            </div>

            <div>
                <h2>Besoin d'aide ?</h2>
                <div className='actions'>
                    <Card title={dataAction[14].title} icon={dataAction[14].icon} />
                    <Card title={dataAction[15].title} icon={dataAction[15].icon} />
                    <Card title={dataAction[16].title} icon={dataAction[16].icon} />
                    <Card title={dataAction[17].title} icon={dataAction[17].icon} />
                </div>
            </div>


        </div>
    );
}

export default Body;
