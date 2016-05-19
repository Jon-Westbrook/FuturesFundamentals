<?php

	$tpl_data = array(
		"wick__label__top"=>"Market High",
		"wick__label__bottom"=>"Market Low",
		"stick__label__top"=>"Starting Price",
		"stick__label__bottom"=>"Ending Price",
		"_class"=>"",
		"stick_top"=>null,
		"stick_height"=>null,
		"wick_height"=>null
	);

	if (@$candlestick_data) {
		$tpl_data = array_merge($tpl_data, $candlestick_data);
	}
?>

<div class="candlestick <?php echo $tpl_data['_class']; ?>">
	<div class="wick" <?php /* if ($tpl_data['wick_height']) { ?>data-style="height:<?php echo $tpl_data['wick_height']; ?>px !important;"<?php } */ ?>></div>
	<div class="stick" <?php /* data-style="<?php if ($tpl_data['stick_height']) { ?>height:<?php echo $tpl_data['stick_height']; ?>px !important;<?php }  ?> <?php if ($tpl_data['stick_top']) { ?>top:<?php echo $tpl_data['stick_top']; ?>px !important;<?php } ?>" */ ?>></div>
	
	<div class="candlestick_label wick__label__top indicator--right"><?php echo $tpl_data['wick__label__top']; ?> <div class="indicator"></div></div>
	<div class="candlestick_label wick__label__bottom indicator--right"><?php echo $tpl_data['wick__label__bottom']; ?> <div class="indicator "></div></div>
	<div class="candlestick_label stick__label__top indicator--left"><?php echo $tpl_data['stick__label__top']; ?> <div class="indicator "></div></div>
	<div class="candlestick_label stick__label__bottom indicator--left"><?php echo $tpl_data['stick__label__bottom']; ?> <div class="indicator "></div></div>
</div>


