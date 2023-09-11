from app import app

from models import db, Champion, User

if __name__ == '__main__':
    with app.app_context():
        print("Starting seed...")

        #User.query.delete()
        Champion.query.delete()

        Aatrox = Champion(
            id = "Aatrox", 
            name = "Aatrox", 
            title = "the Darkin Blade", 
            image = "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg", 
            loading_image = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg", 
            skins = [
                {"name": "Justicar Aatrox", "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_1.jpg"},
                {"name": "Mecha Aatrox", "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_2.jpg"},
                {"name": "Sea Hunter Aatrox", "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_3.jpg"},
                {"name": "Blood Moon Aatrox", "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_7.jpg"},
                {"name": "Prestige Blood Moon Aatrox", "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_8.jpg"},
                {"name": "Victorious Aatrox", "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_9.jpg"},
                {"name": "Odyssey Aatrox", "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_11.jpg"},
                {"name": "Prestige Blood Moon (2022)", "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_20.jpg"},
                {"name": "Lunar Eclipse Aatrox", "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_21.jpg"},
                {"name": "DRX Aatrox", "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_30.jpg"},
                {"name": "Prestige DRX Aatrox", "image": "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_31.jpg"},
            ],
            lore = "Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance.",
            spells = [
                {"name": "The Darkin Blade", "id": "AatroxQ", "description": "Aatrox slams his greatsword down, dealing physical damage. He can swing three times, each with a different area of effect.", "image": "http://ddragon.leagueoflegends.com/cdn/13.17.1/img/spell/AatroxQ.png"},
                {"name": "Infernal Chains", "id": "AatroxW", "description": "Aatrox smashes the ground, dealing damage to the first enemy hit. Champions and large monsters have to leave the impact area quickly or they will be dragged to the center and take the damage again.", "image": "http://ddragon.leagueoflegends.com/cdn/13.17.1/img/spell/AatroxW.png"},
                {"name": "Umbral Dash", "id": "AatroxE", "description": "Passively, Aatrox heals when damaging enemy champions. On activation, he dashes in a direction.", "image": "http://ddragon.leagueoflegends.com/cdn/13.17.1/img/spell/AatroxE.png"},
                {"name": "World Ender", "id": "AatroxR", "description": "Aatrox unleashes his demonic form, fearing nearby enemy minions and gaining attack damage, increased healing, and Move Speed. If he gets a takedown, this effect is extended.", "image": "http://ddragon.leagueoflegends.com/cdn/13.17.1/img/spell/AatroxR.png"},
                {"name": "Deathbringer Stance", "id": "AatroxPassive", "description": "Periodically, Aatrox's next basic attack deals bonus physical damage and heals him, based on the target's max health.", "image": "http://ddragon.leagueoflegends.com/cdn/13.17.1/img/spell/Aatrox_Passive.png"}
            ]
        )