import { Router, Route, Switch } from "wouter-preact";
import Layout from "../components/Layout.tsx";
import Home from "../pages/Home.tsx";
import About from "../pages/About.tsx";

export default function App() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route>
                        <section>
                            <h1>404</h1>
                            <p>Page not found.</p>
                        </section>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}
