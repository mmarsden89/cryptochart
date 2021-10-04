<h1>CryptoChart</h1>
<p>CryptoChart is a front-end react project that I built to help myself keep track of crypto prices without needing to forfeit my personal data to other services or painstakingly manually track each one.</p>

<p>You can use this webapp <a href="https://mmarsden89.github.io/cryptochart/" target="_blank">here</a> or follow the instructions below to install locally</p>

<h3>Design</h3>
<p>I built this project with emulating <a href="www.coinbase.com" target="_blank">Coinbase's</a> design while adding by spin to the way information was laid out</p>

<div>
<h3>Technologies</h3>
    <p>This project was built using React and the following libraries to bring everything together</p>
    <ul>
        <ul>
        <h4>Day.js</h4>
            <li>I have used moment.js in the past but this library was perfet for me in implimentation especially considering it's lighter load.</li>
        </ul>
        <ul>
        <h4>Sass</h4>
            <li>I develop with Sass in general as it helps me to keep my styling more tidy through use of nested syntax, mixins, ease of importing and compiling and is well documented</li>
        </ul>
        <ul>
        <h4>Chart.js</h4>
            <li>I chose Chart.js over D3 simply for ease of set up and not needing a very custom solution. Chart.js offers more out of the box graphs and I wasn't in need of anything extremely detailed</li>
        </ul>
    </ul>
</div>

<h3>API</h3>
<p>CryptoChart uses CryptoCompare's free tier to access all historic and current crypto prices as well as news. Researching crpyto APIs, I settled on CryptoCompare namely due to their low barrier to entry, ease of use as well as the ability to retrieve news.</p>
