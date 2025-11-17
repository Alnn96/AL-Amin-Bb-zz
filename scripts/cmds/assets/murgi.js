module.exports = {
	config: {
		name: "murgi",
		aliases: ["mrg"],
		version: "1.2",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "xem số tiền hiện có của bạn hoặc người được tag",
			en: "view your murgi or the murgi of the tagged person"
		},
		category: "economy",
		guide: {
			en: "   {pn}: view your murgi"
				+ "\n   {pn} <@tag>: view the murgi of the tagged person"
		}
	},

	langs: {
		bangla: {
			murgi : Khangki magi bessa magi cutmarani matharcud 
              Tor mare cudi
Tore cudi 
Tor 14 gustire line e dar koraiya cudi
Tor mar suna kori vuna 
Tor mar sunar vitor current er pilar dukhaw.. 
Tor gf re cudi meye hoile tor bf er putki diya rod dukhabo.  
Nodi magir chele 
Rendi magi
Tor mar sathe tui putki mara lo tor mar sunai torkarir tel dukaiya jala pura mitaiya de
Tor mar suna diya elish mach dukamu dam beshi thakar karone suna theke ber o korte parbe nh..
		}
	},

	onStart: async function ({ message, usersData, event, getLang }) {
		if (Object.keys(event.mentions).length > 0) {
			const uids = Object.keys(event.mentions);
			let msg = "";
			for (const uid of uids) {
				const userMoney = await usersData.get(uid, "money");
				msg += getLang("moneyOf", event.mentions[uid].replace("@", ""), userMoney) + '\n';
			}
			return message.reply(msg);
		}
		const userData = await usersData.get(event.senderID);
		message.reply(getLang("money", userData.money));
	}
};
      
