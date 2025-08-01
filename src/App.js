import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import Tile from './Tile';
import { 
  FaGavel, FaTrafficLight, FaBullhorn, FaBus, FaCarCrash,
  FaTaxi, FaParking, FaMapMarkedAlt, FaTruck, FaRoad,
  FaTrain, FaShip, FaHardHat, FaGasPump, FaWarehouse
} from 'react-icons/fa';

const initialTiles = [
  { id: 1, title: "Модуль администрирования транспортных правонарушений", icon: <FaGavel /> },
  { id: 2, title: "Модуль диспетчерского управления ИТС для ЧС и ВС", icon: <FaTrafficLight /> },
  { id: 3, title: "Модуль централизованного информирования участников движения", icon: <FaBullhorn /> },
  { id: 4, title: "Модуль управления движением общественного транспорта", icon: <FaBus /> },
  { id: 5, title: "Модуль учета ДТП и аварийных ситуаций", icon: <FaCarCrash /> },
  { id: 6, title: "Модуль контроля такси и каршеринга", icon: <FaTaxi /> },
  { id: 7, title: "Модуль управления парковочными зонами", icon: <FaParking /> },
  { id: 8, title: "Модуль мониторинга маршрутов и навигации", icon: <FaMapMarkedAlt /> },
  { id: 9, title: "Модуль контроля грузовых перевозок", icon: <FaTruck /> },
  { id: 10, title: "Модуль анализа состояния дорожного покрытия", icon: <FaRoad /> },
  { id: 11, title: "Модуль управления железнодорожными перевозками", icon: <FaTrain /> },
  { id: 12, title: "Модуль мониторинга водного транспорта", icon: <FaShip /> },
  { id: 13, title: "Модуль учета дорожных работ и ограждений", icon: <FaHardHat /> },
  { id: 14, title: "Модуль контроля АЗС и заправочных станций", icon: <FaGasPump /> },
  { id: 15, title: "Модуль логистики складских помещений", icon: <FaWarehouse /> }
];

function App() {
  const [tiles, setTiles] = useState(initialTiles);

  const moveTile = (dragIndex, hoverIndex) => {
    const draggedTile = tiles[dragIndex];
    const newTiles = [...tiles];
    
    newTiles.splice(dragIndex, 1);
    newTiles.splice(hoverIndex, 0, draggedTile);
    
    setTiles(newTiles);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div className="content">
          <h1>Портал управления транспортными системами</h1>
          <div className="dashboard">
            {tiles.map((tile, index) => (
              <Tile
                key={tile.id}
                index={index}
                id={tile.id}
                title={tile.title}
                icon={tile.icon}
                moveTile={moveTile}
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;