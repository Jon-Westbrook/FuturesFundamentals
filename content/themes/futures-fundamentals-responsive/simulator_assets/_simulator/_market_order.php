<div class="market_order highlight-container <?php echo @$mo_data['_class']; ?>">
<?php /*
	<div class="close">&times;</div>
	<div class="symbol_time_container">
		<div class="market_order__symbol thick_border">ZCZ5</div>
		<div class="market_order__time">11:59:13 am 9/1/15</div>
	</div>

	<div class="market_order__current">
		Current Position:

		<div class="col2-set market_order__stats">
			<div class="col-1 col">
				<div>Bid: 68.050</div>
				<div>Ask: 68.100</div>
			</div>
			<div class="col-2 col">
				<div>Last: 68.100</div>
				<div>Net: 0.075</div>
			</div>
		</div>

		<div class="col3-set">
			<div class="col-1 col market_order__order_type">
				<label>Order Type</label>
				<div class="dropdown thick_border"><span>MKT</span> &nbsp;&nbsp;&nbsp;&nbsp;<i></i></div>
			</div>
			<div class="col-2 col market_order__quantity <?php if ($mo_data['selected'] == "quantity") { ?>selected<?php } ?>">
				<label>Quantity</label>
				<div class="dropdown thick_border"><span>1</span> &nbsp;&nbsp;&nbsp;&nbsp;<i></i></div>
			</div>
			<div class="col-3 col market_order__limit_price <?php if ($mo_data['selected'] == "price") { ?>selected<?php } ?>">
				<label>Limit Price</label>
				<div class="dropdown disabled wide numbers thick_border"> &nbsp;&nbsp;&nbsp;&nbsp;<i></i></div>
			</div>

		</div>
		<div class="col3-set">
			<div class="col-1 col market_order__time_in_force <?php if ($mo_data['selected'] == "time") { ?>selected<?php } ?>">
				<label>Time-in-force</label>
				<div class="dropdown disabled thick_border"><span>DAY</span> &nbsp;&nbsp;&nbsp;&nbsp;<i></i></div>
			</div>
			<div class="col-2 col">
				&nbsp;
			</div>
			<div class="col-3 col market_order__stop_price">
				<label>Stop price</label>
				<div class="dropdown disabled wide numbers thick_border"><i> &nbsp;&nbsp;&nbsp;&nbsp;</i></div>
			</div>

		</div>

	</div>

	<div class="cta-buttons">
		<a href="#" class="cta-btn btn btn-buy">BUY</a>
		<a href="#" class="cta-btn btn light-blue btn-sell">SELL</a>
	</div>
*/ ?>

	<div class="mouse"></div>
	<div class="market_order__dropdown"></div>
	<div class="market_order__dropdown--opened"></div>
	<div class="market_order__dropdown_quantity"></div>
	<div class="market_order__dropdown_quantity--opened"></div>
</div>