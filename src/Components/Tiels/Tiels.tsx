import PersonalProjects from "../Tiel/Sources/Projects/PersonalProjectList";
import UniProjects from "../Tiel/Sources/Projects/UnilProjectList";
import React from 'react';
import Tile from '../Tiel/Tile';
import tileStyles from '../Tiel/Tile.module.css';
import tielsStyles from './Tiels.module.css';

const personalProjects = PersonalProjects.map(item => (
    <Tile
        key={item.id}
        {...item}
    />
));

const uniProjects = UniProjects.map(item => (
    <Tile
        key={item.id}
        {...item}
    />
));


export default function Tiels() {
    return (
        <div>
            <h1 className={tielsStyles.title}>Personal Projects</h1>
            <div className={tileStyles.container}>{personalProjects}</div>

            <h1 className={tielsStyles.title}>Uni Projects</h1>
            <div className={tileStyles.container}>{uniProjects}</div>
        </div>
    );
}
