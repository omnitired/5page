import React, { Suspense } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import style from "./root-style.module.scss";
import Loading from "./components/loading";
import "./reset.scss";
import "./fonts.scss";

const Home = React.lazy(() => import("./pages/Home"));
const Level = React.lazy(() => import("./pages/Level"));
const Play = React.lazy(() => import("./pages/Play"));

const Root = () => {
  return (
    <HashRouter>
      <main className={style["main-container"]}>
        <section className={style["wrapper"]}>
          <Switch>
            <Suspense fallback={<Loading />}>
              <Route exact path="/" component={Home} />
              <Route exact path="/level" component={Level} />
              <Route exact path="/play" component={Play} />
            </Suspense>
          </Switch>
        </section>
      </main>
    </HashRouter>
  );
};

export default Root;
