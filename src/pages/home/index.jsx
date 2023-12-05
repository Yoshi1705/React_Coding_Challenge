import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Header from "../../components/header";
import Table from "../../components/Screen/index";
import Modal from "../../components/model";
import ImportFileModal from "../../components/ImportModal";
import { getLocalStorageItem, setLocalStorageItem } from "../../utils/localstorage";
import colors from "../../theme/colors";
import DialougeHeader from "../../components/dialougHeader";
import { FaPen } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import fonts from "../../theme/fonts";
import PlayerOptionsModal from "../../components/playerOptionsModal";
import Button from "../../components/button";
import DeleteModal from "../../components/deleteModel";
import InputTextField from "../../components/textInput";
import DropDown from "../../components/dropdown";
import Radio from "../../components/radio";
import EditModal from "../../components/editModal";

function Home() {
  const [showImportModel, setShowImportModel] = useState(false);
  const [showActionModel, setShowActionModel] = useState(false);
  const [showDeleteConfirmModel, setDeleteConfirmModel] = useState(false);
  const [showEditModel, setEditModel] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [players, setPlayers] = useState([]);
  const [countries,setCountries] = useState([]);
  const [search,setSearch] = useState("");
  const positions = ['Defender','Forward','Goalkeeper','Midfielder']
  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      const countryNames = data.map(country => country.name.common);
      countryNames.sort()
      setCountries(countryNames)
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  };
  
  useEffect(() => {
    const data = getLocalStorageItem("@players");
    setPlayers(data == null ? [] : data);
    fetchCountries()
  }, [])

  const editAction = () => {
    setShowActionModel(false)
    setEditModel(true)
  }
  const deleteAction = () => {
    setShowActionModel(false)
    setDeleteConfirmModel(true)
  }
  const deletePlayer = () => {
    const newPlayers = players.filter((player, i) => { return i !== selectedPlayer });
    setPlayers(newPlayers);
    setLocalStorageItem("@players", newPlayers);
    setDeleteConfirmModel(false)
    setSelectedPlayer(null)
  }
  const editPlayer = (newPlayer) => {
      const newPlayers = [...players];
      newPlayers[selectedPlayer] = newPlayer;
      setPlayers(newPlayers); 
      setLocalStorageItem("@players",newPlayers);
      setEditModel(false)
      setSelectedPlayer(null)
  }
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <Navbar page={"home"} />
      <div style={{ flexGrow: 1 }}>
        <Header updateTable={(x)=>setSearch(x)} showImportModel={() => { setShowImportModel(true) }} teamLoaded={players?.length > 0 ? true : false} />
        <Table search={search} players={players} setSelectedPlayer={setSelectedPlayer} setShowActionModel={setShowActionModel} showImportModel={() => { setShowImportModel(true) }} />
      </div>
      <Modal isOpen={showImportModel} onClose={() => setShowImportModel(false)}>
        <ImportFileModal setPlayers={setPlayers} setShowImportModel={setShowImportModel} />
      </Modal>
      <Modal isOpen={showActionModel} onClose={() => setShowActionModel(false)}>
        <PlayerOptionsModal editAction={editAction} deleteAction={deleteAction} setShowActionModel={setShowActionModel} />
      </Modal>
      <Modal isOpen={showDeleteConfirmModel} onClose={() => setDeleteConfirmModel(false)}>
        <DeleteModal setDeleteConfirmModel={setDeleteConfirmModel} setSelectedPlayer={setSelectedPlayer} deletePlayer={deletePlayer} />
      </Modal>
      <Modal isOpen={showEditModel} onClose={() => setEditModel(false)}>
        <EditModal editPlayer={editPlayer} selectedPlayer={players[selectedPlayer]} setSelectedPlayer={setSelectedPlayer} setEditModel={setEditModel} countries={countries} positions={positions}/>
      </Modal>
    </div>
  );
}

export default Home;
