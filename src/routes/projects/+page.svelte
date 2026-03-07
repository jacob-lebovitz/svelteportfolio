<svelte:head>
  <title>Projects</title>
</svelte:head>

<nav>
    <a href=".">Home</a>
    <a class="current" href="projects">Projects</a>
    <a href="contact">Contact</a>
    <a href="resume">Resume</a>
    <a href="https://github.com/jacob-lebovitz" target="_blank">GitHub</a>
</nav>
    <h1>Projects</h1>
    <p>Information and descriptions of Jacob's projects will be listed here:</p>
    <div class="projects">
    <!-- 1. Water Access Optimization in DRC -->
    <section>
        <header><h2>Optimization Project: Water Access in the Democratic Republic of Congo</h2></header>
        <p>
        Built scalable optimization pipelines in Julia to identify high-impact locations for new wells in the DRC. The goal was to maximize reach and minimize distance, improving access to water by 19%.
        </p>
        <ul>
        <li><strong>Tools & Technologies:</strong> Julia, Optimization libraries</li>
        <li>Developed models to prioritize well locations for maximum social impact</li>
        <li>Analyzed geographic and demographic data to guide decision-making</li>
        </ul>
    </section>

    <!-- 2. Predictive and Prescriptive Solar Battery Charging -->
    <section>
        <header><h2>Predictive & Prescriptive Solar Battery Charging</h2></header>
        <p>
        Developed models to forecast solar energy availability and prescribe optimal battery charging, holding, and selling strategies for electricity storage in Southern California.
        </p>
        <ul>
        <li><strong>Tools & Technologies:</strong> Julia, Machine Learning, Optimization</li>
        <li>Predicted next-day solar energy production using historical data</li>
        <li>Optimized battery operations to maximize energy efficiency and profitability</li>
        </ul>
    </section>

    <!-- 3. Analytics Lab: BPHC Homeless Shelter Occupancy Prediction -->
    <section>
        <header><h2>Analytics Lab: Boston Public Health Commission Occupancy Prediction</h2></header>
        <p>
        Built and deployed machine learning models to forecast 14-day homeless shelter occupancy, improving capacity predictions by 50% and reducing overflow risk.
        </p>
        <ul>
        <li><strong>Tools & Technologies:</strong> Python, Random Forest, Gradient Boosting Trees, ARIMA</li>
        <li>Identified key social, environmental, and temporal predictors of shelter utilization</li>
        <li>Presented actionable insights to BPHC program managers and city partners</li>
        </ul>
    </section>

    <!-- 4. Yelp Sentiment Analysis -->
    <section>
        <header><h2>Yelp Sentiment Analysis</h2></header>
        <p>
        Conducted sentiment analysis on Yelp reviews to extract insights about user satisfaction and business performance.
        </p>
        <ul>
        <li><strong>Tools & Technologies:</strong> Python, NLP libraries, Pandas, Matplotlib</li>
        <li>Preprocessed text data and generated sentiment scores</li>
        <li>Visualized patterns across businesses and categories</li>
        </ul>
    </section>

    <!-- 5. Voltage Discharge Prediction and Materials Analysis -->
    <section>
        <header><h2>Voltage Discharge Prediction & Materials Analysis</h2></header>
        <p>
        Monitored lab-scale green hydrogen electrolyzers to predict voltage discharge curves and analyze material performance under simulated renewable energy intermittency.
        </p>
        <ul>
        <li><strong>Tools & Technologies:</strong> Python, Seeq, MATLAB, Arduino</li>
        <li>Engineered pipelines to clean raw sensor data, removing outliers and noise</li>
        <li>Generated actionable insights for material performance and equipment efficiency</li>
        </ul>
    </section>

    <!-- 6. Optimization Project: F1 Race Locations -->
    <section>
        <header><h2>Optimization Project: F1 Race Location Planning</h2></header>
        <p>
        Rescheduled Formula 1 races using optimization in AMPL to minimize travel distance and meet venue requirements. Reduced travel costs and improved sustainability by cutting average emissions by 927 tons of CO₂ per team.
        </p>
        <ul>
        <li><strong>Tools & Technologies:</strong> AMPL, Optimization modeling</li>
        <li>Built models to optimize race scheduling geographically and logistically</li>
        <li>Improved environmental impact and reduced operational costs</li>
        </ul>
    </section>

    <!-- 7. MongoDB vs SQL Query Analysis -->
    <section>
        <header><h2>MongoDB vs SQL Query Analysis</h2></header>
        <p>
        Compared execution time and usefulness of SQL and MongoDB queries using the Yelp dataset to understand trade-offs between relational and non-relational database approaches.
        </p>
        <ul>
        <li><strong>Tools & Technologies:</strong> SQL, MongoDB, Python</li>
        <li>Tested queries on large datasets and measured performance</li>
        <li>Evaluated usefulness of each system for analytics tasks</li>
        </ul>
    </section>
    </div>