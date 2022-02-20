<?
	$staffs = array(
		"james" => array(
			"name" => "James",
			"company" => "Warehouse Ghana",
			"assets" => "£300000000",
			"DOB" => "June 8th, 1984"
		), 
		"akweter" => array(
			"name" => "Akweter",
			"company" => "Cobweb Communications",
			"assets" => "£9003200",
			"DOB" => "December 19th, 1997"
		),
		"junior" => array(
			"name" => "Top Gun",
			"company" => "Speedy Africa",
			"assets" => "£67780003",
			"DOB" => "May 16th, 1986"
		)
	);

	$movie = $staffs[ $_GET[ "staff" ] ];
?>

<h3><? echo $staff[ "name" ] ?></h3>

<ul>
	<li>
		<strong>company</strong>: 
		<? echo $staff[ "company" ] ?>
	</li>
	<li>
		<strong>assets</strong>: 
		<? echo $staff[ "assets" ] ?>
	</li>
	<li>
		<strong>DOB</strong>: 
		<? echo $staff[ "DOB" ] ?>
	</li>
</ul>
