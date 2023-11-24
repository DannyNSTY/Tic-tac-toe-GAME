import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = 'Save';
  }


  return (
    <motion.li whileHover={{ scale: 1.2, 
      boxShadow: "0px 20px 10px 0px rgba(0,0,0,0.3)" }} 
    className={isActive ? 'active' : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <motion.button whileTap={{ scale: 0.8 }}
      onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</motion.button>
    </motion.li>
  );
}
