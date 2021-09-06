<?php

function drawImage($num)
{
    for ($i = 1; $i <= $num; $i++) {
        for ($j = 1; $j <= $num; $j++) {
            if ($j == 4 || $i == 2 || $i == $num || $i == 4) {
                echo "*";
            } elseif ($i == 1 || $i == 2) {
                echo "#";
            } else {
                echo "#";
            }
        }
        echo "<br>";
    }
}

drawImage(7);