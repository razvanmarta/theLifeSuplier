<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2019 by razvanmarta (http://jsbin.com/vetenuq/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
function oscarTheLifetimeSupplier () {
  var age = prompt('How old are you, chump?');
  var maxAge = prompt('How long do you think you\'ll live? Enter an age.');
  var snack = prompt('Okay then. What is your favorite snack?');
  var numPerWeek = prompt('That sounds delicious. How many of those do you eat in a week?');
  var totalNeeded = (numPerWeek * 52) * (maxAge - age);
  alert('That means that you will need ' + totalNeeded + ' ' + snack + ' to last you until the ripe old age of ' + maxAge + '.');
  return;
};

oscarTheLifetimeSupplier ();
</script>
</body>
</html>
