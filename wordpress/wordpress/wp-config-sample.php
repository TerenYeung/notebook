<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'myblog');

/** MySQL database username */
define('DB_USER', 'teren-blog');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'a},@QM.*m;oSvXb:8-s.LRUzdt ?r%bl-0/.~l]M,=G|,%O9f2MDO=r!C_D/{O`!');
define('SECURE_AUTH_KEY',  ';c|5;vDupD.KgX_F6@* jJI$5w^!wFi-SfctRU-h-|q?vVh*R~,`g}mm}5uN~cQp');
define('LOGGED_IN_KEY',    '+N/,/`}$.;fCt6]2SPeYS%V!HA;%I(>,:cK2[GB0E@,vTo-P,y+|.c>Jne1_OW_;');
define('NONCE_KEY',        ' )((;GIOCD=Xqmbt+2E wp~|^wnJ+kTToyen>1$$C3^qX|ILrgX9E6JtGvT(k&, ');
define('AUTH_SALT',        'w#J)4/Ao*2$s*U*)JOuUi@_kIs ++f?e]_ $-uhlOo+?+e$1:/.=Rc7:}}wd6j(h');
define('SECURE_AUTH_SALT', '9*#n|E)CQ0KzYw@NzX7dQupLnC-z7gW,0%)X1vg8Nx*+@6aj0:P5(<BUbZm!^5=@');
define('LOGGED_IN_SALT',   'j+OBAN)%Wwj}*?hp~>NSn.EkuD1[>z.T,nQkgL]TDL&J-7^ZPW^eHHqkT_dz}iVM');
define('NONCE_SALT',       'lK5B%I_596xFqn@51}YPx 3t}YI#hXc>]6et2@7u;Tj-~fK~J[s38^@fA&!Xgp!d');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
