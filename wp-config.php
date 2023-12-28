<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'koukaki' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'K59-:$sfdfD/CTHeOQ+ujLGu2`3wW8q,.N/M11v=._oHr.H887iL9lfN^!F.U~R9' );
define( 'SECURE_AUTH_KEY',  '82}AjDv~8}fYa[$A* Sv(:0}# niYxF:7/iXLf49&pRe.{9I3:r>2!CGrIs@K,_7' );
define( 'LOGGED_IN_KEY',    '@nPa`d5O|:)?_f8MeOmm8;zYS#c@G<)elQm{:1xz~|81]cOd,wcI!D|ifPbE0*< ' );
define( 'NONCE_KEY',        '_P(~Qdo0)d8As6@*xFyl?noeV]UU]/a_kJFs)-@=.X~B_2/0e<l7_A^Z,3f!`qzg' );
define( 'AUTH_SALT',        'uu0lZkQYI_2peIpF|KDHtG=dEA8bOk2bo{{2*-LW][.y/EF(J^A/~eYwV4$BvkS|' );
define( 'SECURE_AUTH_SALT', '~X5o,^DPAKmIcq4)tFs%W!,UZM[(Qvsr&_{ $h(`<BOk<(Ci30apVa(Mk.2!7I,y' );
define( 'LOGGED_IN_SALT',   ',<{NZ6[0cZqVo9u;L;yN;E;4OIr0(Sg+lpw9h9bih8`rvncJ[dhKy~r,=sLvsin;' );
define( 'NONCE_SALT',       '$0u:c/`[zuDXZ_<}!23~o~<j ],kUUf/R:aN_+Oh%+@763q$(.#V978vbv(R|)=o' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
