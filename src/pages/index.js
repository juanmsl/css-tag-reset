import React from 'react';

const App = () => (
    <>
        <section>
            <h1>h1. Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
        </section>
        <section>
            <h2>h2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
        </section>
        <section>
            <h3>h3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque.</h3>
        </section>
        <section>
            <h4>h4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, provident.</h4>
        </section>
        <section>
            <p>p. Lorem <abbr
                title="Lorem ipsum dolor sit amet, consectetur adipisicing elit.">abbr</abbr> ipsum <code>code</code> dolor
                sit amet (<a href="/">a. Lorem ipsum dolor sit amet.</a>), consectetur adipisicing <kbd>kbd</kbd> elit.
                Accusantium (<span>span</span>) ad distinctio <samp>samp</samp> doloremque
                excepturi <b>b</b> and <strong>strong</strong> inventore
                itaque <sub>sub</sub> modi <sup>sup</sup> placeat qui (<small>small</small>) sapiente veritatis!</p>
        </section>
        <section>
            <h5>h5. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, dolorum eius.</h5>
        </section>
        <section>
            <h6>h6. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias deserunt exercitationem
                reprehenderit!</h6>
        </section>
        <section>
            <hr/>
        </section>
        <section>
        </section>
        <section>
            <img src="https://via.placeholder.com/150" alt="img"/>
            <pre>
                pre. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </pre>
        </section>
        <hr/>
        <form>
            <fieldset>
                <input type="text" placeholder="text"/>
            </fieldset>
            <fieldset>
                <input type="password" placeholder="password"/>
            </fieldset>
            <fieldset>
                <input type="number" placeholder="number"/>
            </fieldset>
            <fieldset>
                <input type="tel" placeholder="tel"/>
            </fieldset>
            <fieldset>
                <input type="url" placeholder="url"/>
            </fieldset>
            <fieldset>
                <input type="date" placeholder="date"/>
            </fieldset>
            <fieldset>
                <input type="time" placeholder="time"/>
            </fieldset>
            <fieldset>
                <input type="search" placeholder="search"/>
            </fieldset>
            <fieldset>
                <input type="file" placeholder="file"/>
            </fieldset>
            <fieldset>
                <input type="button" value='button'/>
            </fieldset>
            <fieldset>
                <button>button</button>
            </fieldset>
            <fieldset>
                <input type="reset"/>
            </fieldset>
            <fieldset>
                <input type="submit"/>
            </fieldset>
        </form>
    </>
);

export default App;