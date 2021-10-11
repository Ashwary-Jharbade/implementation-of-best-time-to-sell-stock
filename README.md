﻿### Implementation-of-best-time-to-sell-stock

-   Check if passed array argument is valid and not empty
    -   If empty:
        -   Return "Passsed argument is not a valid array!"
    -   If not empty:
        -   Continue
-   Get the minimum stock price and the day when it is minimum.
    -   Loop over the passed array argument and check when price is minimum.
    -   Initialize two variables to track the min stock price and respective day.
    -   Loop starts
        -   If price is minimum:
            -   Assign them to the previously initialized variables.
        -   If not:
            -   Continue
        Loop end
    -   Return min stock price and its respective day
-   Check if stock there is any future date when stock could be sold.
    -   If there is no date
        -   Return profit is 0
    -   If there are dates
        -   Continue
-   Initialize two variables to track the upcoming stock price difference and respective day when the max profit could be earned by selling stocks.
-   Start checking the upcoming days when the stock selling could result in maximum profit
    -   Loop start
        -   Compare the current stock price and the stock price user have purchased
            -   If comparasion is profitable than the previous comparasion:
                -   Store the day when the profit is max on stock sale. 
            -   If not:
                -   Continue
    -   Loop end
-   Return the difference between the stock prcie of max profit stock sale day and when the stock was purchased.
