import React from "react";
import deleteImg from "../../assets/delete.png";

const SelectedCard = ({ player, removePlayer }) => {

    console.log(player);

    const handleRemove = () => {
        removePlayer(player)
    }




  return (
    <div className="mt-5 border-3 border-gray-300 p-3 flex justify-between items-center">
      <div className="flex items-center">
        <img
          src={player.player_image}
          className="w-[120px] h-[120px] rounded-2xl"
          alt=""
        />
        <div className="ml-3 text-4xl">
          <h1>{player.player_name}</h1>
          <p className="text-xl">{player.playing_role}</p>
        </div>
      </div>

      <div onClick={handleRemove}>
        <img src={deleteImg} alt="" />
      </div>
    </div>
  );
};

export default SelectedCard;
