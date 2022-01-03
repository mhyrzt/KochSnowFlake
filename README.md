# Koch Snowflake

The Koch snowflake is a fractal curve and one of the earliest fractals to have been described.

for constructing this fractal human should follow these steps:

1. divide the line segment into three segments of equal length.
2. draw an equilateral triangle that has the middle segment from step 1 as its base and points outward.
3. remove the line segment that is the base of the triangle from step 2.

however, computers need a much more specific and accurate algorithm to generate this mathematic beauty, therefore i am going to explain how does my algorithm work.

## Preprocessing

as we know from elementary math a line needs a pair of points to be described, so we are going to develop an algorithm to make sure it works for all lines given by pair of points in a plane.

$$
    P_1 = (x_1, y_1)\\
    P_2 = (x_2, y_2)\\
$$

we should keep a thing in mind that our line wont necessarily be a straight along horizontal axis therefore it will always has an angle along X axis which can be described by following formula:

$$
    \Delta_x = x_1 - x_2\\
    \Delta_y = y_1 - y_2\\
    \theta = arctan2(\Delta_y, \Delta_x)
$$

in the next step we should rotate our line in a way that it would be along horizontal axis, we can simply achieve this goal by a simple transformation matrix:

$$
     P' = \begin{bmatrix}
        x' \\ y'
    \end{bmatrix} =
    \begin{bmatrix}
        x \\ y
    \end{bmatrix}
    \begin{bmatrix}
        \cos\theta & -\sin\theta \\
        \sin\theta & \cos\theta
    \end{bmatrix} =
    \begin{bmatrix}
        x\cos\theta - y\sin\theta \\
        x\sin\theta +  y\cos\theta
    \end{bmatrix}
$$

because we want to our new line to have following property, our rotation angle must be $-\theta$:

$$
    x'_1 < x'_2\\
    y'_1 = y'_2
$$

## Make the Equilateral triangle

1. find the barycentric of triangle
$$  
    T_1 = (x_{t1}, y_{t1}) \qquad  T_2 = (x_{t2}, y_{t2}) \\
    y_{t1} = y_{t2} = y_1 = y_2 \\
    x_{t1} = (2x_1 + x_2) / 3\\
    x_{t2} = (x_1 + 2x_2) / 3
$$
2. in order to find the third point we need another transformation matrix in order to rotate a position around another position by a given angle:
$$
    \theta=\pi/3 \\
    P = T_2 \qquad C = T_1\\

    P' = \begin{bmatrix}
            x \\ y
        \end{bmatrix} =
        \begin{bmatrix}
            cos\theta.(x_P - x_C) - sin\theta.(y_P - y_C) + x_C \\
            sin\theta.(x_P - x_C) + sin\theta.(y_P - y_C) + y_C
        \end{bmatrix}
$$

last but not least we have to rerotate all points by angle which we found at preprocessing stage.
