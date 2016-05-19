<div id="mod-infographic-trade" class="infographic-simulator-container mod-acs-info-graphic-container is-full-width_ is-intro">
    <section class="infographic infographic-simulator" id="infographicProtections">
        <div class="wrapper">
            <div class="infographic-headline">
                <h1 class="title-primary" style="opacity: 1;">Introduction</h1>

                <div class="pager">
	                <?php /* foreach ($json as $i=>$panel) { ?>
	                	<a href="#" class="dot dot-<?php echo $i; ?> <?php if ($i == 0) { ?>cycle-pager-active<?php  } ; ?>"><span>•</span></a>
	                <?php } */ ?>

                </div>
            </div>
            
	        <div class="carousel">
		        <?php foreach ($json as $i=>$panel) { ?>
		        	<?php include('_simulator/panel-'.strtolower(str_replace(" ","_",$panel['type'])).'.php'); ?>
		        <?php } ?>
	        </div>
        </div>
            
        <div class="controls">
            <a href="#" class="btn-prev disabled" style="display: none;">Prev</a> <a href="#" class="btn-next disabled" style="display: none;">Next</a>
        </div>
        
        <div class="bkg-wrap">
    		<div id="bkg-section" class="bkg "></div>
    		<div id="Market_Snapshot_Static" class="bkg">
	    		<div class="vert-center graphic-right">
			    	<?php include('_simulator/_market-snapshot.php'); ?>
			    	<div class="shadow shadow_254"></div>
	    		</div>
    		</div>

    		<div id="Market_Snapshot_Tabs" class="bkg">
	    		<div class="market-snapshot-large market-snapshot-white">
			    	<?php include('_simulator/_market-snapshot.php'); ?>
			    	<div class="shadow shadow_356"></div>
	    		</div>
    		</div>


			<div id="Market_Snapshot_Colors" class="bkg">
	    		<div class="market-snapshot-large">
			    	<?php include('_simulator/_market-snapshot.php'); ?>
<!-- 			    	<div class="arrow green enter-from-bottom"></div> -->
			    	<div class="shadow shadow_356"></div>
	    		</div>
    		</div>


			<div id="Market_Snapshot_Group" class="bkg">
	    		<div class="market-snapshot-small market-snapshots-inline">
			    	<?php 
					    $ms_data = array(
							"title"=>"Soybeans",
							"price"=>868.50,
							"high"=>877.50,
							"high_movement"=>"+5.25",
							"low"=>868.50,
							"low_movement"=>"+0.6%",
							"symbol"=>"ZSX5",
							"_class"=>""
						);
				    	
				    	include('_simulator/_market-snapshot.php'); 
				    ?>
			    	<?php 
					    $ms_data = array(
							"title"=>"Mini Soybeans",
							"price"=>878.00,
							"high"=>878.00,
							"high_movement"=>"+4.125",
							"low"=>868.75,
							"low_movement"=>"+0.47%",
							"symbol"=>"XKX5",
							"_class"=>"red"
						);
				    	
				    	include('_simulator/_market-snapshot.php'); 
				    ?>
			    	<?php 
					    $ms_data = array(
							"title"=>"Wheat",
							"price"=>476.50,
							"high"=>479.50,
							"high_movement"=>"+4.75",
							"low"=>471.50,
							"low_movement"=>"+1.01%",
							"symbol"=>"ZWZ5",
							"_class"=>""
						);
				    	
				    	include('_simulator/_market-snapshot.php'); 
				    ?>
			    	<?php 
					    $ms_data = array(
							"title"=>"Corn",
							"price"=>366.75,
							"high"=>371.50,
							"high_movement"=>"+2.25",
							"low"=>366.75,
							"low_movement"=>"+0.61%",
							"symbol"=>"ZCZ5",
							"_class"=>""
						);
				    	
				    	include('_simulator/_market-snapshot.php'); 
				    ?>
	    		</div>
	    		<div class="shadow shadow_464"></div>
    		</div>
    		
    		<div class="bkg" id="Trading_Chart">
	    		<div class="chart-container">
		    		<div class="chart-background"></div>
		    		<div class="chart-version chart-line">
			    		<div class="chart-line__line chart-line-light"></div>
			    		<div class="chart-line__line chart-line-medium"></div>
			    		<div class="chart-line__line chart-line-dark"></div>
		    		</div>
		    		<div class="chart-version chart-bar">
			    		<div class="chart-bar__line chart-bar__line--1 chart-line-light"></div>
			    		<div class="chart-bar__line chart-bar__line--2 chart-line-light"></div>
			    		<div class="chart-bar__line chart-bar__line--3 chart-line-light"></div>
			    		<div class="chart-bar__line chart-bar__line--4 chart-line-light"></div>
			    		<div class="chart-bar__line chart-bar__line--5 chart-line-dark"></div>
		    		</div>
		    		<div class="chart-version chart-candlestick">
			    		<?php $candlestick_data = array("_class"=>"chart-candlestick__line chart-candlestick__line--1 red  no_label candlestick--small"); include('_simulator/_candlestick.php'); ?>
			    		<?php $candlestick_data = array("_class"=>"chart-candlestick__line chart-candlestick__line--2 red  no_label candlestick--small"); include('_simulator/_candlestick.php'); ?>
			    		<?php $candlestick_data = array("_class"=>"chart-candlestick__line chart-candlestick__line--3 doji no_label candlestick--small"); include('_simulator/_candlestick.php'); ?>
			    		<?php $candlestick_data = array("_class"=>"chart-candlestick__line chart-candlestick__line--4 green   no_label candlestick--small"); include('_simulator/_candlestick.php'); ?>
			    		<?php $candlestick_data = array("_class"=>"chart-candlestick__line chart-candlestick__line--5 green  no_label candlestick--small"); include('_simulator/_candlestick.php'); ?>
		    		</div>
		    		
	    		</div>
	    		<div class="shadow shadow_254"></div>
    		</div>
    		
    		<div class="bkg" id="Candlestick">
	    		<?php $candlestick_data = array("_class"=>"no_label"); include('_simulator/_candlestick.php'); ?>
	    		<div class="shadow shadow_356"></div>
    		</div>
    		
    		<div class="bkg" id="Candlestick_Labelled">
	    		<?php 
		    		$candlestick_data = array(
		    			"stick__label__top"=>"Ending Price",
		    			"stick__label__bottom"=>"Starting Price"
		    		); 
					include('_simulator/_candlestick.php'); 
				?>
	    		<div class="shadow shadow_356"></div>
	    		
    		</div>
    		
    		<div class="bkg" id="Candlestick_Labelled_Red">
	    		<?php $candlestick_data = array("_class"=>"red"); include('_simulator/_candlestick.php'); ?>
	    		<div class="shadow shadow_356"></div>
	    		
    		</div>
    		
    		<div class="bkg" id="Candlestick_Accordion">
	    		<?php $candlestick_data = array("_class"=>"no_label"); include('_simulator/_candlestick.php'); ?>
	    		
    		</div>

			<div class="bkg" id="Screen">
				<?php /*
				<img src="/_simulator/img/trading_screen_chart.png" />
				*/ ?>
				<img src="/_simulator/img/trading_screen_chart_blank.png" />
				<div class="sticks">
					<?php $candlestick_data = array("stick_top"=>15, "stick_height"=>51, "wick_height"=>79 ,"_class"=>"no_label candlestick--small stick stick_1 red"); include('_simulator/_candlestick.php'); ?>
					<?php $candlestick_data = array("stick_top"=>23, "stick_height"=>16, "wick_height"=>79 ,"_class"=>"no_label candlestick--small stick stick_2 red"); include('_simulator/_candlestick.php'); ?>
					<?php $candlestick_data = array("stick_top"=>36, "stick_height"=>5, "wick_height"=>58 ,"_class"=>"no_label candlestick--small stick stick_3 doji"); include('_simulator/_candlestick.php'); ?>
					<?php $candlestick_data = array("stick_top"=>23, "stick_height"=>45, "wick_height"=>62 ,"_class"=>"no_label candlestick--small stick stick_4 green"); include('_simulator/_candlestick.php'); ?>
					<?php $candlestick_data = array("stick_top"=>35, "stick_height"=>27, "wick_height"=>79 ,"_class"=>"no_label candlestick--small stick stick_5 green"); include('_simulator/_candlestick.php'); ?>

					<?php $candlestick_data = array("stick_top"=>11, "stick_height"=>21, "wick_height"=>66 ,"_class"=>"no_label candlestick--small stick stick_6 red"); include('_simulator/_candlestick.php'); ?>
					<?php $candlestick_data = array("stick_top"=>11, "stick_height"=>35, "wick_height"=>36 ,"_class"=>"no_label candlestick--small stick stick_7 red"); include('_simulator/_candlestick.php'); ?>

					<?php $candlestick_data = array("stick_top"=>7, "stick_height"=>53, "wick_height"=>63 ,"_class"=>"no_label candlestick--small stick stick_8 green"); include('_simulator/_candlestick.php'); ?>
					<?php $candlestick_data = array("stick_top"=>19, "stick_height"=>19.5, "wick_height"=>54 ,"_class"=>"no_label candlestick--small stick stick_9 green"); include('_simulator/_candlestick.php'); ?>
					<?php $candlestick_data = array("stick_top"=>8, "stick_height"=>17, "wick_height"=>39.5 ,"_class"=>"no_label candlestick--small stick stick_10 green"); include('_simulator/_candlestick.php'); ?>

					<?php $candlestick_data = array("stick_top"=>20, "stick_height"=>31, "wick_height"=>63 ,"_class"=>"no_label candlestick--small stick stick_11 red"); include('_simulator/_candlestick.php'); ?>
					<?php $candlestick_data = array("stick_top"=>15, "stick_height"=>57, "wick_height"=>85 ,"_class"=>"no_label candlestick--small stick stick_12 red"); include('_simulator/_candlestick.php'); ?>
					<?php $candlestick_data = array("stick_top"=>22, "stick_height"=>16.5, "wick_height"=>49 ,"_class"=>"no_label candlestick--small stick stick_13 red"); include('_simulator/_candlestick.php'); ?>

					<?php $candlestick_data = array("stick_top"=>36, "stick_height"=>31, "wick_height"=>79 ,"_class"=>"no_label candlestick--small stick stick_14 green"); include('_simulator/_candlestick.php'); ?>

					<?php $candlestick_data = array("stick_top"=>23, "stick_height"=>21, "wick_height"=>79 ,"_class"=>"no_label candlestick--small stick stick_15 red"); include('_simulator/_candlestick.php'); ?>
					<?php $candlestick_data = array("stick_top"=>15, "stick_height"=>11, "wick_height"=>23 ,"_class"=>"no_label candlestick--small stick stick_16 red"); include('_simulator/_candlestick.php'); ?>

					<?php $candlestick_data = array("stick_top"=>10, "stick_height"=>34, "wick_height"=>53 ,"_class"=>"no_label candlestick--small stick stick_17 green"); include('_simulator/_candlestick.php'); ?>
					<?php $candlestick_data = array("stick_top"=>8, "stick_height"=>5, "wick_height"=>39 ,"_class"=>"no_label candlestick--small stick stick_18 doji"); include('_simulator/_candlestick.php'); ?>

					<?php $candlestick_data = array("stick_top"=>17, "stick_height"=>6.5, "wick_height"=>45.5 ,"_class"=>"no_label candlestick--small stick stick_19 green"); include('_simulator/_candlestick.php'); ?>
					<?php $candlestick_data = array("stick_top"=>10, "stick_height"=>12.5, "wick_height"=>21 ,"_class"=>"no_label candlestick--small stick stick_20 green"); include('_simulator/_candlestick.php'); ?>
					<?php $candlestick_data = array("stick_top"=>15, "stick_height"=>29, "wick_height"=>43 ,"_class"=>"no_label candlestick--small stick stick_21 green"); include('_simulator/_candlestick.php'); ?>
				</div> 
				<div class="shadow shadow_464"></div>
			</div>
			
			<div class="bkg" id="News">
				<?php include('_simulator/_news.php'); ?>
				<div class="mouse"></div>
				<div class="shadow shadow_254"></div>
			</div>
			
			<div class="bkg" id="Time_Flood">
				<?php $chart_data = array("_class"=>"barn high"); include("_simulator/_chart.php"); ?>
			</div>
			
			<div class="bkg" id="Time_Summer">
				<?php $chart_data = array("_class"=>"sun low"); include("_simulator/_chart.php"); ?>
			</div>
			
			<div class="bkg" id="MS_Trade">
			    	<?php 
					    $ms_data = array(
							"title"=>"Corn",
							"price"=>371.25,
							"high"=>371.50,
							"high_movement"=>"+2.25",
							"low"=>366.75,
							"low_movement"=>"+0.61%",
							"symbol"=>"ZCZ5",
							"_class"=>"green"
						);
				    	
				    	include('_simulator/_market-snapshot.php'); 
				    ?>
				    
				    <div class="mouse"></div>
				    <div class="shadow shadow_254"></div>
					
			</div>
			
			<div class="bkg" id="Trade_Popups">
				<?php include('_simulator/_market_order.php'); ?>
		    	<div class="shadow shadow_343"></div>
			</div>
			
			<div class="bkg" id="Trade_Quantity">
				<div class="popup popup-blue active">
					<div class="popup-content">
		                <h2 class="popup-title">Understanding Quantities</h2>
			            <div class="text">To purchase one unit or futures contract does not mean you are purchasing a single cob or even stalk of corn. In fact, one futures contract of corn is equal to 5,000 bushels.</div>
		            </div>
				</div>
				<?php $mo_data = array("_class"=>"has-selected grayed","selected"=>"quantity"); include('_simulator/_market_order.php'); ?>
				<div class="shadow shadow_343"></div>
			</div>
			
			
			<div class="bkg" id="Buy_Sell">
				<?php $mo_data = array("_class"=>"has-selected grayed","selected"=>"buy"); include('_simulator/_market_order.php'); ?>
				<div class="shadow shadow_343"></div>
				
			</div>
			
			<?php /*
			<div class="bkg" id="Buy">
				<div class="popup popup-blue active">
					<div class="popup-content">
		                <h2 class="popup-title">Buy</h2>
		                <div class="col2-set">
			                <div class="col-1 col">
								<div class="text">The extreme flooding has you thinking that prices in the corn market will spike. You purchase one corn futures contract in anticipation of a potential rise in price.</div>
			                </div>
			                <div class="col-2 col">
				        		<img src="/_simulator/img/barn-circle.png" />        
			                </div>
		                </div>
					</div>
	            </div>
				<?php $mo_data = array("_class"=>"has-selected","selected"=>"buy"); include('_simulator/_market_order.php'); ?>
				
			</div>
			
			<div class="bkg" id="Sell">
				<div class="popup popup-blue active">
					<div class="popup-content">
		                <h2 class="popup-title">Sell</h2>
		                <div class="col2-set">
			                <div class="col-1 col">
								<div class="text">On the other hand, if that bumper crop came through and supply is set to exceed demand, you&rsquo;ll prepare to sell before an anticipated downward trend in prices.</div>
			                </div>
			                <div class="col-2 col">
				        		<img src="/_simulator/img/sun-circle.png" />        
			                </div>
		                </div>
		            </div>
				</div>
				<?php $mo_data = array("_class"=>"has-selected","selected"=>"sell"); include('_simulator/_market_order.php'); ?>
				
			</div>
			*/ ?>
			
			<div class="bkg" id="Confirm">
				<?php /*
				<div class="confirm-order">
					<div class="close">&times;</div>
					<div class="confirm-order__title">Confirm Order</div>
					<div class="confirm-order__symbol">ZCZ5</div>
					<div class="confirm-order__details">
						<div><strong>Contract Size:</strong><span class="newsprint"></span></div>
						<div><strong>Tick Size:</strong><span class="newsprint"></span></div>
						<div><strong>Tick Value:</strong><span class="newsprint"></span></div>
						<div><strong>Last Value:</strong><span class="newsprint"></span></div>
						<div><strong>Notional Value of Order:</strong><span class="newsprint"></span></div>
						<div><strong>Margin committed to trade:</strong><span class="newsprint"></span></div>
						<br />
						<div><strong>Side:</strong><span>SELL</span></div>
						<div><strong>Qty:</strong><span>1</span></div>
						<div><strong>Type:</strong><span>MKT</span></div>
						<div><strong>TIF:</strong><span>DAY</span></div>
					</div>
					<div class="confirm_checkbox">
						<input type="checkbox" /> Place a protect Stop order along with this main order
					</div>
					<div class="cta-buttons">
						<a href="#" class="cta-btn dark-blue">BUY</a>
						<a href="#" class="cta-btn light-blue">SELL</a>
					</div>

				</div>
				*/ ?>
				<img src="/_simulator/img/confirm_order.png" />
				<div class="shadow shadow_356"></div>
			</div>
			
			<div class="bkg" id="Summary">
				<img src="/_simulator/img/position_summary.png" />
				<div class="shadow shadow_356"></div>
			</div>
        </div>

        <div class="loader"></div>
    </section>
</div>
