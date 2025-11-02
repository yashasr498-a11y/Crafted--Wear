+"use client";

+

+import { motion } from "framer-motion";

+import Image from "next/image";

+

+export default function Hero() {

+  return (

+    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

+      {/* Animated background elements */}

+      <div className="absolute inset-0 overflow-hidden">

+        <motion.div

+          className="absolute top-20 left-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"

+          animate={{

+            scale: [1, 1.2, 1],

+            opacity: [0.3, 0.5, 0.3],

+          }}

+          transition={{

+            duration: 8,

+            repeat: Infinity,

+            ease: "easeInOut",

+          }}

+        />

+        <motion.div

+          className="absolute bottom-20 right-10 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl"

+          animate={{

+            scale: [1.2, 1, 1.2],

+            opacity: [0.5, 0.3, 0.5],

+          }}

+          transition={{

+            duration: 8,

+            repeat: Infinity,

+            ease: "easeInOut",

+          }}

+        />

+      </div>

+

+      {/* Navigation */}

+      <nav className="absolute top-0 left-0 right-0 z-50">

+        <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between">

+          <motion.div

+            initial={{ opacity: 0, x: -20 }}

+            animate={{ opacity: 1, x: 0 }}

+            transition={{ duration: 0.6 }}

+            className="flex items-center gap-3"

+          >

+            <div className="relative w-12 h-12 holographic">

+              <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg transform rotate-6" />

+              <div className="absolute inset-0 glass-card-gold flex items-center justify-center">

+                <span className="text-2xl font-display font-bold text-gradient-gold">C</span>

+              </div>

+            </div>

+            <div>

+              <h1 className="text-2xl font-display font-bold text-gradient-gold">Crafted Wear</h1>

+              <p className="text-xs text-gray-400 tracking-wider">LUXURY STREETWEAR</p>

+            </div>

+          </motion.div>

+

+          <motion.div

+            initial={{ opacity: 0, x: 20 }}

+            animate={{ opacity: 1, x: 0 }}

+            transition={{ duration: 0.6 }}

+            className="hidden md:flex items-center gap-8"

+          >

+            <a href="#products" className="text-sm text-gray-300 hover:text-gold-400 transition-colors">

+              Collection

+            </a>

+            <a href="#about" className="text-sm text-gray-300 hover:text-gold-400 transition-colors">

+              About

+            </a>

+            <button className="glass-card px-6 py-2 text-sm hover:bg-white/10 transition-all">

+              Cart (0)

+            </button>

+          </motion.div>

+        </div>

+      </nav>

+

+      {/* Hero Content */}

+      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center py-20">

+        {/* Left Content */}

+        <motion.div

+          initial={{ opacity: 0, y: 30 }}

+          animate={{ opacity: 1, y: 0 }}

+          transition={{ duration: 0.8, delay: 0.2 }}

+          className="space-y-8"

+        >

+          <div className="space-y-4">

+            <motion.div

+              initial={{ opacity: 0, scale: 0.9 }}

+              animate={{ opacity: 1, scale: 1 }}

+              transition={{ duration: 0.6, delay: 0.3 }}

+              className="inline-block glass-card-gold px-4 py-2 text-sm text-gold-400 font-semibold"

+            >

+              ✨ NEW COLLECTION 2025

+            </motion.div>

+            

+            <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-none">

+              <span className="block text-white">Wear Your</span>

+              <span className="block text-gradient-gold">Statement</span>

+            </h2>

+            

+            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">

+              Premium customized streetwear that speaks volumes. Bold designs, luxury fabrics, and unmatched comfort for the modern youth.

+            </p>

+          </div>

+

+          <div className="flex flex-col sm:flex-row gap-4">

+            <motion.a

+              href="#products"

+              whileHover={{ scale: 1.05 }}

+              whileTap={{ scale: 0.95 }}

+              className="btn-primary text-center"

+            >

+              Shop Now

+            </motion.a>

+            <motion.button

+              whileHover={{ scale: 1.05 }}

+              whileTap={{ scale: 0.95 }}

+              className="btn-secondary"

+            >

+              Explore Collection

+            </motion.button>

+          </div>

+

+          {/* Stats */}

+          <div className="grid grid-cols-3 gap-6 pt-8">

+            <div className="glass-card p-4 text-center">

+              <div className="text-3xl font-bold text-gradient-gold">500+</div>

+              <div className="text-xs text-gray-400 mt-1">Happy Customers</div>

+            </div>

+            <div className="glass-card p-4 text-center">

+              <div className="text-3xl font-bold text-gradient-gold">50+</div>

+              <div className="text-xs text-gray-400 mt-1">Unique Designs</div>

+            </div>

+            <div className="glass-card p-4 text-center">

+              <div className="text-3xl font-bold text-gradient-gold">4.9</div>

+              <div className="text-xs text-gray-400 mt-1">Rating</div>

+            </div>

+          </div>

+        </motion.div>

+

+        {/* Right Content - Model Image */}

+        <motion.div

+          initial={{ opacity: 0, scale: 0.9 }}

+          animate={{ opacity: 1, scale: 1 }}

+          transition={{ duration: 0.8, delay: 0.4 }}

+          className="relative perspective-1000"

+        >

+          <div className="relative spotlight">

+            {/* 3D Card Effect */}

+            <motion.div

+              className="relative transform-3d"

+              whileHover={{ rotateY: 5, rotateX: -5 }}

+              transition={{ duration: 0.3 }}

+            >

+              {/* Glow effect */}

+              <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/20 to-gold-600/20 rounded-3xl blur-2xl animate-glow" />

+              

+              {/* Main image container */}

+              <div className="relative glass-card-gold p-2 overflow-hidden group">

+                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">

+                  <Image

+                    src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=1200&fit=crop"

+                    alt="Model wearing Crafted Wear T-shirt"

+                    fill

+                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"

+                    priority

+                  />

+                  

+                  {/* Overlay gradient */}

+                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent opacity-60" />

+                  

+                  {/* Logo overlay on shirt */}

+                  <motion.div

+                    initial={{ opacity: 0, scale: 0.8 }}

+                    animate={{ opacity: 1, scale: 1 }}

+                    transition={{ duration: 0.6, delay: 0.8 }}

+                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"

+                  >

+                    <div className="holographic glass-card-gold p-8 rounded-2xl backdrop-blur-sm">

+                      <div className="text-6xl font-display font-bold text-gradient-gold text-center">

+                        CW

+                      </div>

+                      <div className="text-xs text-gold-400 text-center mt-2 tracking-widest">

+                        CRAFTED WEAR

+                      </div>

+                    </div>

+                  </motion.div>

+                </div>

+

+                {/* Floating badge */}

+                <motion.div

+                  className="absolute -top-4 -right-4 glass-card-gold p-4 rounded-full"

+                  animate={{ rotate: 360 }}

+                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}

+                >

+                  <div className="text-center">

+                    <div className="text-sm font-bold text-gold-400">LIMITED</div>

+                    <div className="text-xs text-gray-400">EDITION</div>

+                  </div>

+                </motion.div>

+              </div>

+            </motion.div>

+          </div>

+

+          {/* Floating elements */}

+          <motion.div

+            className="absolute -bottom-8 -left-8 glass-card p-6 max-w-xs"

+            initial={{ opacity: 0, x: -20 }}

+            animate={{ opacity: 1, x: 0 }}

+            transition={{ duration: 0.6, delay: 1 }}

+          >

+            <div className="flex items-center gap-4">

+              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">

+                <span className="text-2xl">🔥</span>

+              </div>

+              <div>

+                <div className="text-sm font-semibold text-white">Trending Now</div>

+                <div className="text-xs text-gray-400">Oversized Noir Collection</div>

+              </div>

+            </div>

+          </motion.div>

+        </motion.div>

+      </div>

+

+      {/* Scroll indicator */}

+      <motion.div

+        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"

+        animate={{ y: [0, 10, 0] }}

+        transition={{ duration: 2, repeat: Infinity }}

+      >

+        <div className="glass-card px-4 py-2 text-xs text-gray-400">

+          Scroll to explore ↓

+        </div>

+      </motion.div>

+    </section>

+  );

+}
