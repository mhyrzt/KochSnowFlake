# Koch Snowflake

The Koch snowflake is a fractal curve and one of the earliest fractals to have been described.

for constructing this fractal humans should follow these steps:

    1. divide the line segment into three segments of equal length.
    2. draw an equilateral triangle that has the middle segment from step 1 as its base and points outward.
    3. remove the line segment that is the base of the triangle from step 2.

however computers need a much more specific and accurate algorithm to generate this mathematic beauty, therefore i am going to explain how does my algorithm work.

as we know from elemntry maths a line needs 2 points to be described, so we are going to develope an algorithm to make sure it works for all lines given by pair of points in a plane.

$$
    P_1 = (x_1, y_1)\\
    P_2 = (x_2, y_2)\\
$$

we should keep a thing in mind that our line wont necessairly be a straight line along horizontal or vertcal axis therefore it will always has an angle which can be described by following formula:

$$
    \Delta_x = x_1 - x_2\\
    \Delta_y = y_1 - y_2\\
    \theta = arctan2(\Delta_y, \Delta_x)
$$

in the next step we should rotate our line in a way that it would be along horizontal axis, we can simply achive this goal by a simple transformation matrix:

$$
    \begin{bmatrix}
        \cos\theta & -\sin\theta \\
        \sin\theta & \cos\theta
    \end{bmatrix}
$$

and also by following this rule our rotation must be anti clockwise:

$$
    x'_1 < x'_2\\
    y'_1 = y'_2
$$

now we can find our new positions with this formula:

$$
    P' = \begin{bmatrix}
        x' \\ y'
    \end{bmatrix} = \begin{bmatrix}
        x\cos(-\theta) - y\sin(-\theta) \\
        x\sin(-\theta) + y\cos(-\theta)
    \end{bmatrix} = \begin{bmatrix}
        x\cos\theta + y\sin\theta \\
        y\cos\theta - x\sin\theta
    \end{bmatrix}
$$
