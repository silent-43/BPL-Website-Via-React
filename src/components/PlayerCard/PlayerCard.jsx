import React, { useState } from "react";
import userImg from "../../assets/userImg.png";
import vectorImg from "../../assets/Vector.png";
import { toast } from "react-toastify";

const PlayerCard = ({ player, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price.split("$").join("").split(",").join(""))

    if(availableBalance<playerPrice){
        toast("Not Enough Coins..!!")
        return
    }

    if(purchasedPlayers.length===6){
        toast("6 Players Are Already Selected")
        return
    }
    setIsSelected(true);
    setAvailableBalance (availableBalance - playerPrice);
    setPurchasedPlayers([...purchasedPlayers, playerData])
    toast("Player Purchased..!")
  };

  return (
    <div className="card bg-base-100 shadow-sm p-4">
      <figure>
        <img className="w-[350px] h-[300px]" src={player.player_image} />
      </figure>
      <div className="mt-4">
        <div className="flex">
          <img src={userImg} alt="" />
          <h2 className="card-title ml-2">{player.player_name}</h2>
        </div>

        <div className="flex justify-between mt-4 border-b-1 pb-4 border-gray-300">
          <div className="flex items-center">
            <img className="w-[22px] h-[22px]" src={vectorImg} alt="" />
            <span className="ml-2">{player.player_country}</span>
          </div>
          <button className="btn">{player.playing_role}</button>
        </div>

        <div className="flex justify-between mt-1 font-bold">
          <span>Rating</span>
          <span>{player.rating}</span>
        </div>
        <div className="flex justify-between mt-1">
          <span className="font-bold">{player.bating_style}</span>
          <span>{player.bowling_style}</span>
        </div>

        <div className="card-actions mt-4 flex justify-between items-center">
          <p className="font-bold">Price: {player.price}</p>
          <button disabled={isSelected} onClick={() => {handleSelected(player)}} className="btn">
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
