import React from "react";
import classNames from "classnames";
import style from "./style.module.scss";
import { withRouter } from "react-router";

const LevelSelect = (props) => (
    <div className={classNames(style["level-modal"], {[style["active"]]: props.state})}>
        <h6>LEVEL SELECT</h6>
        <div>
            <span onClick={() => props.history.push("/play?level=1")}>1</span>
            <span onClick={() => props.history.push("/play?level=2")}>2</span>
            <span onClick={() => props.history.push("/play?level=3")}>3</span>
            <span onClick={() => props.history.push("/play?level=4")}>4</span>
            <span onClick={() => props.history.push("/play?level=5")}>5</span>
            <span onClick={() => props.history.push("/play?level=6")}>6</span>
            <span onClick={() => props.history.push("/play?level=7")}>7</span>
            <span onClick={() => props.history.push("/play?level=8")}>8</span>
            <span onClick={() => props.history.push("/play?level=9")}>9</span>
            <span onClick={() => props.history.push("/play?level=10")}>10</span>
            <span onClick={() => props.history.push("/play?level=11")}>11</span>
            <span className={style["soon"]}>12</span>
            <span className={style["soon"]}>13</span>
            <span className={style["soon"]}>14</span>
            <span className={style["soon"]}>15</span>
        </div>
    </div>
);

export default withRouter(LevelSelect);