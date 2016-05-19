<div id="mod-infographic-trade" class="mod-acs-info-graphic-container is-full-width_">
    <section class="infographic" id="infographicProtections">
        <div class="wrapper">
            <div class="infographic-headline">
                <h1 class="title-primary" style="opacity: 1;">Introduction</h1><a href="#overview-map" class="btn-overview-map" rel="modal">See Overview Map</a>

                <div class="pager">
                    <a href="#" class="dot cycle-pager-active"><span>•</span></a><a href="#" class="dot"><span>•</span></a><a href="#" class="dot"><span>•</span></a><a href="#" class="dot"><span>•</span></a><a href="#" class="dot"><span>•</span></a><a href="#" class="dot"><span>•</span></a><a href="#" class="dot"><span>•</span></a><a href="#" class="dot"><span>•</span></a><a href="#" class="dot"><span>•</span></a><a href="#" class="dot"><span>•</span></a><a href="#" class="dot"><span>•</span></a><a href="#" class="dot"><span>•</span></a>
                </div>
            </div>

            <div class="carousel">
                <div class="panel panel-1 cycle-slide cycle-sentinel" data-title="Introduction" data-bkg="<?php echo $panel['background']; ?>" style="position: static; top: 0px; left: 0px; z-index: 100; opacity: 1; display: block; visibility: hidden;">
                    <div class="infographic-content" style="visibility: hidden;">
                        <h2 class="panel-title" style="visibility: hidden;">Protecting the Market</h2>

                        <p style="visibility: hidden;">Futures exchanges process millions of trades each day. With so many orders coming at once, you need a lot of checkpoints to make sure everything goes smoothly. Let’s take a look at a just few of the protections a single electronic trade must pass.</p><a href="#" class="btn blue next-panel" style="visibility: hidden;">Follow a Trade</a>
                    </div>
                </div>

                <div class="panel panel-1 cycle-slide cycle-slide-active" id="introduction" data-title="Introduction" data-bkg="<?php echo $panel['background']; ?>" style="position: absolute; top: 0px; left: 0px; z-index: 99; opacity: 1; display: block;">
                    <div class="infographic-content">
                        <h2 class="panel-title">Protecting the Market</h2>

                        <p>Futures exchanges process millions of trades each day. With so many orders coming at once, you need a lot of checkpoints to make sure everything goes smoothly. Let’s take a look at a just few of the protections a single electronic trade must pass.</p><a href="#" class="btn blue next-panel">Follow a Trade</a>
                    </div>
                </div>

                <div class="panel panel-2 cycle-slide" id="overview" data-title="The Journey" data-bkg="bkg-overview" style="position: absolute; top: 0px; left: 0px; z-index: 100; display: none; opacity: 0;">
                    <div class="infographic-content">
                        <p>Here’s a broad overview of a trade’s journey through the clearing process. In this example, we’ll enter an order to buy 100 crude oil contracts.</p>
                    </div>
                </div>

                <div class="panel panel-style-2 panel-3 cycle-slide" id="credit-controls" data-title="See Overview Map" data-bkg="bkg-credit-controls" style="position: absolute; top: 0px; left: 0px; z-index: 88; display: none;">
                    <div class="infographic-content">
                        <div class="content-left">
                            <h2 class="panel-title">Credit Controls</h2>

                            <p>Clearing firms set credit limits based on order size or risk values. If specified limits are breached, the order is rejected.</p>
                        </div>

                        <div class="box">
                            <div class="box-inner">
                                <h3 class="box-title">Our Status</h3>

                                <p>One contract of crude oil is $4,950. Thus, 10 contracts come out to $49,500. Our margin level must readily clear this amount before going to the next step.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel panel-style-2 panel-4 cycle-slide" id="maximum-order-qty" data-title="See Overview Map" data-bkg="bkg-maximum-order-qty" style="position: absolute; top: 0px; left: 0px; z-index: 89; display: none;">
                    <div class="infographic-content">
                        <div class="content-left">
                            <h2 class="panel-title">Maximum Order Quantity</h2>

                            <p>Every product has a pre-defined maximum quantity per order. This step ensures that the order is not exceeding this limit before it continues. If the max quantity is exceeded, the order is rejected.</p>
                        </div>

                        <div class="box">
                            <div class="box-inner">
                                <h3 class="box-title">Our Status</h3>

                                <p>Let’s say the max quantity for crude oil contracts is 999. If we accidentally entered 1,000, instead of 100, then our order would be rejected.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel panel-style-2 panel-5 cycle-slide" id="price-branding" data-title="See Overview Map" data-bkg="bkg-price-branding" style="position: absolute; top: 0px; left: 0px; z-index: 90; display: none;">
                    <div class="infographic-content">
                        <div class="content-left">
                            <h2 class="panel-title">Price Banding</h2>

                            <p>All orders on an electronic trading platform are subject to price verification. Bids at prices well above or well below the market fall outside of that contract’s “band” and are rejected.</p>
                        </div>

                        <div class="box">
                            <div class="box-inner">
                                <h3 class="box-title">Our Status</h3>

                                <p>The crude oil market is trading at $90.00 per contract, with a price band of $0.75. If we set a limit of $91.80, our trade would be automatically rejected because it’s $1.05 over the price band.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel panel-style-2 panel-6 cycle-slide" id="central-limit-order-book" data-title="See Overview Map" data-bkg="bkg-central-limit-order-book" style="position: absolute; top: 0px; left: 0px; z-index: 91; display: none;">
                    <div class="infographic-content">
                        <div class="content-left">
                            <h2 class="panel-title">Central Limit Order Book</h2>

                            <p>The exchange operates a unified central limit order book because all orders from the member firms are routed to and executed on the exchange’s own trading platform. This single, integrated market allows for concentrated liquidity in one transparent location. An order is accepted in once it meets the previous protection standards.</p>
                        </div>

                        <div class="box">
                            <div class="box-inner">
                                <h3 class="box-title">Our Status</h3>

                                <p>We’ve met the margin requirements, had our quantity approved, and fallen within the price band. Our 100-lot order of crude oil is sent to a single market location.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel panel-7 cycle-slide" id="simultaneous-protections" data-title="See Overview Map" data-bkg="bkg-simultaneous-protections" style="position: absolute; top: 0px; left: 0px; z-index: 92; display: none;">
                    <div class="infographic-content">
                        <h2 class="panel-title">Simultaneous Protections</h2>

                        <p>The entire clearing process for our trade will take about 1 millisecond. (To understand just how fast that is, consider that one blink of a human eye takes about 300 milliseconds.) So it’s no wonder that, at this point, everything starts happening at the same time.</p>
                    </div>
                </div>

                <div class="panel panel-style-2 panel-8 cycle-slide" id="single-market-data-feed" data-title="See Overview Map" data-bkg="bkg-single-market-data-feed" style="position: absolute; top: 0px; left: 0px; z-index: 93; display: none;">
                    <div class="infographic-content">
                        <div class="content-left">
                            <h2 class="panel-title">Single Market Data Feed</h2>

                            <p>Once an order is received, it's sent to the central limit order book where it’s made available to be bought or sold. From the order book, all market participants receive the market data they need to make trading decisions.</p>
                        </div>

                        <div class="box">
                            <div class="box-inner">
                                <h3 class="box-title">Our Status</h3>

                                <p>Our 100-lot order is reflected in a bid/ask spread that goes out to all traders at the same time.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel panel-style-2 panel-9 cycle-slide" id="market-stop-order-protection-points" data-title="See Overview Map" data-bkg="bkg-market-stop-order-protection-points" style="position: absolute; top: 0px; left: 0px; z-index: 94; display: none;">
                    <div class="infographic-content">
                        <div class="content-left">
                            <h2 class="panel-title">Market &amp; Stop Order Protection Points</h2>

                            <p>When placing market or stop orders, customers have the option of assigning a price limit within the price bands themselves or letting the matching engine assign a price limit, or protection point, for them. Either way, every market or stop order is assigned a price limit.</p>
                        </div>

                        <div class="box">
                            <div class="box-inner">
                                <h3 class="box-title">Our Status</h3>

                                <p>Protection points for our 100-lot of crude oil are $0.50, and the market is trading at $90.00. A customer enters a market order to buy 100 contracts without assigning a limit price, so the trading engine assigns a limit of $90.50. That customer’s 100-lot order enters the central limit order book as a $90.50 bid.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel panel-style-2 panel-10 cycle-slide" id="stop-price-logic" data-title="See Overview Map" data-bkg="bkg-stop-price-logic" style="position: absolute; top: 0px; left: 0px; z-index: 95; display: none;">
                    <div class="infographic-content">
                        <div class="content-left">
                            <h2 class="panel-title">Stop Price Logic</h2>

                            <p>Order matching is paused when cascading stop orders cause the market to move beyond a pre-determined range. This step restores balance to the market.</p>
                        </div>

                        <div class="box">
                            <div class="box-inner">
                                <h3 class="box-title">Our Status</h3>

                                <p>If our 100-lot order is placed as a stop order, followed by a domino effect of simultaneous stop orders that push the market beyond a $1.00 move, stop logic will pause the market for 5 seconds to allow liquidity back in, protect against artificial price swings, and get the market up and running again.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel panel-style-2 panel-11 cycle-slide" id="velocity-logic" data-title="See Overview Map" data-bkg="bkg-velocity-logic" style="position: absolute; top: 0px; left: 0px; z-index: 96; display: none;">
                    <div class="infographic-content">
                        <div class="content-left">
                            <h2 class="panel-title">Velocity Logic</h2>

                            <p>Regardless of order type, order matching is paused when prices move excessively and too quickly. Like stop price logic, this step keeps the market balanced.</p>
                        </div>

                        <div class="box">
                            <div class="box-inner">
                                <h3 class="box-title">Our Status</h3>

                                <p>If the crude oil market moves beyond $2.00 within one second, velocity logic will pause the market for 5 seconds to allow liquidity back in, protect against artificial price swings, and get the market up and running again.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="panel panel-12 cycle-slide" id="conclusion" data-title="See Overview Map" data-bkg="bkg-conclusion" style="position: absolute; top: 0px; left: 0px; z-index: 97; display: none;">
                    <div class="infographic-content">
                        <div class="content-left">
                            <h2 class="panel-title">Trade Complete!</h2>

                            <p>The trade makes its way through the matching engine, and our trade is completed. The contracts are now ours. If we decide to sell them back into the market, we know it will be secure and balanced thanks to all the protections we just explored.</p>
                        </div>

                        <div class="share-links">
                            <span class="share-title">Share</span> <a href="javascript:popup_share('https://twitter.com/intent/tweet?status=Follow a futures trade through just a few of the checkpoints it must pass to keep the market fair and balanced.  ' + location.href ,800,400)" class="twitter">Twitter</a> <a href="javascript:popup_share('http://www.facebook.com/sharer.php?s=100&amp;p[url]='+location.href+'&amp;p[images][0]=http://futuresfundamentals.cmegroup.com/_files/img/fb-share-thumbnails/fb-thumb-protections-1.jpg&amp;p[title]=The Market Protections of an Electronic Trade&amp;p[summary]=Take a look at just a few of the checkpoints a single futures trade must pass in order to maintain a balanced market.',800,400)" class="facebook">Facebook</a> <a href="javascript:popup_share('https://plus.google.com/share?url='+location.href,500,400)" class="google-plus">Google+</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bkg-wrap">
            <div id="bkg-introduction" class="bkg repeating-arrow-animation active" style="display: block;">
                <div class="a-row a-row-1 arrow-animation" data-delay="459.20000000000005">
                    <div class="outcome" style="opacity: 0;"></div>

                    <div class="arrow light-blue" style="transform: matrix(1, 0, 0, 1, 601.6, 0);">
                        <div class="head"></div>
                    </div>

                    <div class="arrow dark-blue">
                        <div class="head"></div>
                    </div>
                </div>

                <div class="a-row a-row-2 arrow-animation" data-delay="708.8000000000001">
                    <div class="outcome" style="opacity: 0;"></div>

                    <div class="arrow dark-blue" style="transform: matrix(1, 0, 0, 1, 908.792, 0);">
                        <div class="head"></div>
                    </div>

                    <div class="arrow" style="transform: matrix(1, 0, 0, 1, 263.2, 0);">
                        <div class="head"></div>
                    </div>
                </div>

                <div class="a-row a-row-3 arrow-animation" data-delay="757.6">
                    <div class="outcome" style="opacity: 0;"></div>

                    <div class="arrow" style="transform: matrix(1, 0, 0, 1, 871.192, 0);">
                        <div class="head"></div>
                    </div>

                    <div class="arrow dark-blue" style="transform: matrix(1, 0, 0, 1, 207.176, 0);">
                        <div class="head"></div>
                    </div>
                </div>

                <div class="a-row a-row-4 arrow-animation" data-delay="253.60000000000002">
                    <div class="outcome" style="opacity: 0;"></div>

                    <div class="arrow light-blue" style="transform: matrix(1, 0, 0, 1, 771.176, 0);">
                        <div class="head"></div>
                    </div>

                    <div class="arrow light-blue" style="transform: matrix(1, 0, 0, 1, 288.392, 0);">
                        <div class="head"></div>
                    </div>
                </div>

                <div class="a-row a-row-5 arrow-animation" data-delay="394.40000000000003">
                    <div class="outcome" style="opacity: 0.146508;"></div>

                    <div class="arrow" style="transform: matrix(1, 0, 0, 1, 607.992, 0);">
                        <div class="head"></div>
                    </div>

                    <div class="arrow gray" style="transform: matrix(1, 0, 0, 1, 81.592, 0);">
                        <div class="head"></div>
                    </div>
                </div>

                <div class="a-row a-row-6 arrow-animation" data-delay="769.6">
                    <div class="outcome" style="opacity: 0;"></div>

                    <div class="arrow" style="transform: matrix(1, 0, 0, 1, 188, 0);">
                        <div class="head"></div>
                    </div>
                </div>

                <div class="a-row a-row-7 arrow-animation" data-delay="480.8">
                    <div class="outcome" style="opacity: 0;"></div>

                    <div class="arrow" style="transform: matrix(1, 0, 0, 1, 520.384, 0);">
                        <div class="head"></div>
                    </div>

                    <div class="arrow light-blue">
                        <div class="head"></div>
                    </div>
                </div>

                <div class="a-row a-row-8 arrow-animation" data-delay="168">
                    <div class="outcome" style="opacity: 0;"></div>

                    <div class="arrow light-blue" style="transform: matrix(1, 0, 0, 1, 858.784, 0);">
                        <div class="head"></div>
                    </div>

                    <div class="arrow light-blue" style="transform: matrix(1, 0, 0, 1, 413.6, 0);">
                        <div class="head"></div>
                    </div>

                    <div class="arrow">
                        <div class="head"></div>
                    </div>
                </div>

                <div class="a-row a-row-9 arrow-animation" data-delay="168.8">
                    <div class="outcome" style="opacity: 0;"></div>

                    <div class="arrow" style="transform: matrix(1, 0, 0, 1, 858.784, 0);">
                        <div class="head"></div>
                    </div>

                    <div class="arrow light-blue" style="transform: matrix(1, 0, 0, 1, 413.6, 0);">
                        <div class="head"></div>
                    </div>

                    <div class="arrow">
                        <div class="head"></div>
                    </div>
                </div>

                <div class="a-row a-row-10 arrow-animation" data-delay="604">
                    <div class="outcome" style="opacity: 0;"></div>

                    <div class="arrow" style="transform: matrix(1, 0, 0, 1, 376.376, 0);">
                        <div class="head"></div>
                    </div>
                </div>
            </div>

            <div id="bkg-overview" class="bkg" style="display: none;">
                <div class="exchange exchange-1" id="overview-order-placed" style="opacity: 1; display: none;">
                    <div class="icon" style="display: none;"></div>

                    <div class="exchange-title" style="display: none;">
                        Order Placed
                    </div>

                    <div class="arrow arrow-pass" style="opacity: 1; display: none;"></div>
                </div>

                <div class="exchange exchange-2" id="overview-credit-controls" style="opacity: 1; display: none;">
                    <div class="icon" style="display: none;"></div>

                    <div class="exchange-title" style="display: none;">
                        Credit Controls
                    </div>

                    <div class="arrow arrow-pass" style="opacity: 1; display: none;"></div>

                    <div class="arrow arrow-reject" style="opacity: 1; display: none;"></div>
                </div>

                <div class="exchange exchange-3" id="overview-maximum-order-qty" style="opacity: 1; display: none;">
                    <div class="icon" style="display: none;"></div>

                    <div class="exchange-title" style="display: none;">
                        Maximum Order Quantity
                    </div>

                    <div class="arrow arrow-pass" style="opacity: 1; display: none;"></div>

                    <div class="arrow arrow-reject" style="opacity: 1; display: none;"></div>
                </div>

                <div class="exchange exchange-4" id="overview-price-branding" style="opacity: 1; display: none;">
                    <div class="icon" style="display: none;"></div>

                    <div class="exchange-title" style="display: none;">
                        Price Branding
                    </div>

                    <div class="arrow arrow-pass" style="opacity: 1; display: none;"></div>

                    <div class="arrow arrow-reject" style="opacity: 1; display: none;"></div>
                </div>

                <div class="exchange exchange-5" id="overview-central-limit" style="opacity: 1; display: none;">
                    <div class="icon" style="display: none;"></div>

                    <div class="exchange-title" style="display: none;">
                        Central Limit Order Book
                    </div>

                    <div class="arrow arrow-pass" style="opacity: 1; display: none;"></div>
                </div>

                <div class="container-box" style="opacity: 1; display: none;">
                    <div class="exchange exchange-6" id="overview-single-market" style="opacity: 1; display: none;">
                        <div class="icon" style="display: none;"></div>

                        <div class="exchange-title" style="display: none;">
                            Single Market Data Feed
                        </div>
                    </div>

                    <div class="exchange exchange-7" id="overview-market-stop-order" style="opacity: 1; display: none;">
                        <div class="icon" style="display: none;"></div>

                        <div class="exchange-title" style="display: none;">
                            Market &amp; Stop Order Protection Points
                        </div>
                    </div>

                    <div class="exchange exchange-8" id="overview-stop-price" style="opacity: 1; display: none;">
                        <div class="icon" style="display: none;"></div>

                        <div class="exchange-title" style="display: none;">
                            Stop Price Logic
                        </div>

                        <div class="arrow arrow-pause" style="opacity: 1; display: none;"></div>
                    </div>

                    <div class="exchange exchange-9" id="overview-velocity-logic" style="opacity: 0.801975; display: none;">
                        <div class="icon" style="display: none;"></div>

                        <div class="exchange-title" style="display: none;">
                            Velocity Logic
                        </div>

                        <div class="arrow arrow-reject" style="display: none;"></div>

                        <div class="arrow arrow-pause" style="display: none;"></div>
                    </div>

                    <div class="arrow arrow-pass" style="display: none;"></div>
                </div>

                <div class="exchange exchange-10" id="overview-trade-complete" style="display: none;">
                    <div class="icon" style="display: none;"></div>

                    <div class="exchange-title" style="display: none;">
                        Trade is Complete
                    </div>
                </div>

                <div class="outcome trade-rejection" style="opacity: 1; display: none;">
                    <div class="outcome-title" style="display: none;">
                        Trade Rejection
                    </div>
                </div>

                <div class="outcome market-pause" style="opacity: 1; display: none;">
                    <div class="outcome-title" style="display: none;">
                        Market Pause
                    </div>
                </div>
            </div>

            <div id="bkg-credit-controls" class="bkg bkg-single-arrow-animation">
                <div class="icon"></div>

                <div class="shadow"></div>

                <div class="arrow-animation"></div>

                <div class="outcome trade-rejection">
                    <div class="outcome-title">
                        Trade Rejection
                    </div>
                </div>
            </div>

            <div id="bkg-maximum-order-qty" class="bkg bkg-single-arrow-animation">
                <div class="icon"></div>

                <div class="shadow"></div>

                <div class="arrow-animation"></div>

                <div class="outcome trade-rejection">
                    <div class="outcome-title">
                        Trade Rejection
                    </div>
                </div>
            </div>

            <div id="bkg-price-branding" class="bkg bkg-single-arrow-animation">
                <div class="icon"></div>

                <div class="shadow"></div>

                <div class="arrow-animation"></div>

                <div class="outcome trade-rejection">
                    <div class="outcome-title">
                        Trade Rejection
                    </div>
                </div>
            </div>

            <div id="bkg-central-limit-order-book" class="bkg bkg-single-arrow-animation">
                <div class="icon"></div>

                <div class="shadow"></div>

                <div class="arrow-animation"></div>
            </div>

            <div id="bkg-simultaneous-protections" class="bkg bkg-single-arrow-animation">
                <div class="protections"></div>

                <div class="arrow-animation"></div>
            </div>

            <div id="bkg-single-market-data-feed" class="bkg bkg-single-arrow-animation bkg-blue">
                <div class="icon"></div>

                <div class="shadow"></div>

                <div class="arrow-animation"></div>
            </div>

            <div id="bkg-market-stop-order-protection-points" class="bkg bkg-single-arrow-animation bkg-blue">
                <div class="icon"></div>

                <div class="shadow"></div>

                <div class="arrow-animation"></div>
            </div>

            <div id="bkg-stop-price-logic" class="bkg bkg-single-arrow-animation bkg-blue">
                <div class="icon"></div>

                <div class="shadow"></div>

                <div class="arrow-animation"></div>

                <div class="outcome market-pause">
                    <div class="outcome-title">
                        Market Pause
                    </div>
                </div>
            </div>

            <div id="bkg-velocity-logic" class="bkg bkg-single-arrow-animation bkg-blue">
                <div class="icon"></div>

                <div class="shadow"></div>

                <div class="arrow-animation"></div>

                <div class="outcome trade-rejection">
                    <div class="outcome-title">
                        Trade Rejection
                    </div>
                </div>

                <div class="outcome market-pause">
                    <div class="outcome-title">
                        Market Pause
                    </div>
                </div>
            </div>

            <div id="bkg-conclusion" class="bkg">
                <div class="icon"></div>

                <div class="shadow"></div>
            </div>
        </div>

        <div class="controls">
            <a href="#" class="btn-prev disabled" style="display: none;">Prev</a> <a href="#" class="btn-next disabled" style="display: none;">Next</a>
        </div>

        <div id="overview-map" class="popup overview-map">
            <div class="btn-close">
                <a href="#">Close</a>
            </div>

            <div class="popup-title">
                <h3>Overview</h3>

                <h4>Click on a step to explore</h4>
            </div>

            <div class="popup-content">
                <div class="map">
                    <div class="exchange exchange-1" id="map-overview">
                        <a href="#" class="go-to-panel" data-go-to-panel="1"></a>

                        <div class="icon"></div>

                        <div class="exchange-title">
                            Order Placed
                        </div>

                        <div class="arrow arrow-pass"></div>
                    </div>

                    <div class="exchange exchange-2" id="map-credit-controls">
                        <a href="#" class="go-to-panel" data-go-to-panel="2"></a>

                        <div class="icon"></div>

                        <div class="exchange-title">
                            Credit Controls
                        </div>

                        <div class="arrow arrow-pass"></div>

                        <div class="arrow arrow-reject"></div>
                    </div>

                    <div class="exchange exchange-3" id="map-maximum-order-qty">
                        <a href="#" class="go-to-panel" data-go-to-panel="3"></a>

                        <div class="icon"></div>

                        <div class="exchange-title">
                            Maximum Order Quantity
                        </div>

                        <div class="arrow arrow-pass"></div>

                        <div class="arrow arrow-reject"></div>
                    </div>

                    <div class="exchange exchange-4" id="map-price-branding">
                        <a href="#" class="go-to-panel" data-go-to-panel="4"></a>

                        <div class="icon"></div>

                        <div class="exchange-title">
                            Price Branding
                        </div>

                        <div class="arrow arrow-pass"></div>

                        <div class="arrow arrow-reject"></div>
                    </div>

                    <div class="exchange exchange-5" id="map-central-limit-order-book">
                        <a href="#" class="go-to-panel" data-go-to-panel="5"></a>

                        <div class="icon"></div>

                        <div class="exchange-title">
                            Central Limit Order Book
                        </div>
                    </div>

                    <div class="container-box">
                        <div class="exchange exchange-6" id="map-single-market-data-feed">
                            <a href="#" class="go-to-panel" data-go-to-panel="7"></a>

                            <div class="icon"></div>

                            <div class="exchange-title">
                                Single Market Data Feed
                            </div>
                        </div>

                        <div class="exchange exchange-7" id="map-market-stop-order-protection-points">
                            <a href="#" class="go-to-panel" data-go-to-panel="8"></a>

                            <div class="icon"></div>

                            <div class="exchange-title">
                                Market &amp; Stop Order Protection Points
                            </div>
                        </div>

                        <div class="exchange exchange-8" id="map-stop-price-logic">
                            <a href="#" class="go-to-panel" data-go-to-panel="9"></a>

                            <div class="icon"></div>

                            <div class="exchange-title">
                                Stop Price Logic
                            </div>

                            <div class="arrow arrow-pause"></div>
                        </div>

                        <div class="exchange exchange-9" id="map-velocity-logic">
                            <a href="#" class="go-to-panel" data-go-to-panel="10"></a>

                            <div class="icon"></div>

                            <div class="exchange-title">
                                Velocity Logic
                            </div>

                            <div class="arrow arrow-reject"></div>

                            <div class="arrow arrow-pause"></div>
                        </div>

                        <div class="arrow arrow-pass"></div>
                    </div>

                    <div class="exchange exchange-10" id="map-conclusion">
                        <a href="#" class="go-to-panel" data-go-to-panel="11"></a>

                        <div class="icon"></div>

                        <div class="exchange-title">
                            Trade is Complete
                        </div>
                    </div>

                    <div class="outcome trade-rejection">
                        <div class="outcome-title">
                            Trade Rejection
                        </div>
                    </div>

                    <div class="outcome market-pause">
                        <div class="outcome-title">
                            Market Pause
                        </div>
                    </div>

                    <div class="exchange-5-arrow arrow-pass"></div>
                </div>
            </div>
        </div>

        <div class="loader"></div>
    </section>
</div>
