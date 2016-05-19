<?php

	$tpl_data = array(
		"title"=>"Corn",
		"price"=>366.75,
		"high"=>371.50,
		"high_movement"=>"+2.25",
		"low"=>366.75,
		"low_movement"=>"+0.61%",
		"symbol"=>"ZCZ5",
		"_class"=>""
	);

	if (@$ms_data) {
		$tpl_data = array_merge($tpl_data, $ms_data);
	}	
?>

<div class="market_snapshot_component highlight-container <?php if ($tpl_data['_class']) { echo $tpl_data['_class']; } ?>">
	<div class="market_snapshot_component__title" ><?php echo $tpl_data['title']; ?></div>
	<div class="market_snapshot_component__current-price" <?php if (@$enable_data_highlights) { ?>data-highlight-element="#simulator_market_snapshot__text__current-price"<?php } ?>><?php echo round($tpl_data['price'],2); ?> <span class="floating-number floating-number__1">1</span></div>
	<div class="market_snapshot_component__high-low">
		<div class="prices-container" <?php if (@$enable_data_highlights) { ?>data-highlight-element="#simulator_market_snapshot__text__prices"<?php } ?>>
			<span class="prices">High <?php echo $tpl_data['high']; ?> <br />Low <?php echo $tpl_data['low']; ?></span>
			<span class="floating-number floating-number__2">2</span>
		</div>
		<div class="movement-container"  <?php if (@$enable_data_highlights) { ?>data-highlight-element="#simulator_market_snapshot__text__movement"<?php } ?>
			<span class="movement"><?php echo $tpl_data['high_movement']; ?><br /><?php echo $tpl_data['low_movement']; ?></span>
			<span class="floating-number floating-number__4">4</span>
		</div>
	</div>
	<div class="market_snapshot_component__ticker-symbol" <?php if (@$enable_data_highlights) { ?>data-highlight-element="#simulator_market_snapshot__text__ticker-symbol" <?php } ?>><?php echo $tpl_data['symbol']; ?> <span class="floating-number floating-number__3">3</span></div>
	<button class="market_snapshot_component__btn">Trade</button>	
</div>