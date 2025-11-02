+"use client";

+

+import { motion } from "framer-motion";

+import Image from "next/image";

+import { useState } from "react";

+

+const products = [

+  {

+    id: 1,

+    name: "Noir Oversized Tee",

+    price: "₹2,499",

+    category: "T-Shirts",

+    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop",

+    tag: "BESTSELLER",

+    description: "Premium cotton blend with bold CW logo",

+  },

+  {

+    id: 2,

+    name: "Gold Script Hoodie",

+    price: "₹4,999",

+    category: "Hoodies",

+    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop",

+    tag: "NEW",

+    description: "Luxury fleece with metallic embroidery",

+  },

+  {

+    id: 3,

+    name: "Midnight Drop Tee",

+    price: "₹2,799",

+    category: "T-Shirts",

+    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&h=1000&fit=crop",

+    tag: "LIMITED",

+    description: "Exclusive dark collection piece",

+  },

+  {

+    id: 4,

+    name: "Luxury Noir Hoodie",

+    price: "₹5,499",

+    category: "Hoodies",

+    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&h=1000&fit=crop",

+    tag: "PREMIUM",

+    description: "Ultra-soft premium fabric",

+  },

+  {

+    id: 5,

+    name: "Statement Oversized Tee",

+    price: "₹2,999",

+    category: "T-Shirts",

+    image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=800&h=1000&fit=crop",

+    tag: "TRENDING",

+    description: "Bold graphics, premium comfort",

+  },

+  {

+    id: 6,

+    name: "Elite Gold Hoodie",

+    price: "₹6,499",

+    category: "Hoodies",

+    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&h=1000&fit=crop",

+    tag: "EXCLUSIVE",

+    description: "Signature gold detailing",

+  },

+];

+

+export default function Products() {

+  const [filter, setFilter] = useState("All");

+  const [hoveredId, setHoveredId] = useState<number | null>(null);

+

+  const filteredProducts = filter === "All" 

+    ? products 

+    : products.filter(p => p.category === filter);

+

+  return (

+    <section id="products" className="relative py-32 px-6">

+      {/* Background decoration */}

+      <div className="absolute inset-0 marble-texture opacity-30" />

+      

+      <div className="relative max-w-7xl mx-auto">

+        {/* Section Header */}

+        <motion.div

+          initial={{ opacity: 0, y: 20 }}

+          whileInView={{ opacity: 1, y: 0 }}

+          viewport={{ once: true }}

+          transition={{ duration: 0.6 }}

+          className="text-center mb-16"

+        >

+          <motion.div

+            initial={{ opacity: 0, scale: 0.9 }}

+            whileInView={{ opacity: 1, scale: 1 }}

+            viewport={{ once: true }}

+            className="inline-block glass-card-gold px-6 py-2 text-sm text-gold-400 font-semibold mb-6"

+          >

+            PREMIUM COLLECTION

+          </motion.div>

+          

+          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">

+            <span className="text-white">Curated </span>

+            <span className="text-gradient-gold">Streetwear</span>

+          </h2>

+          

+          <p className="text-gray-400 text-lg max-w-2xl mx-auto">

+            Each piece is crafted with precision, designed for those who dare to stand out

+          </p>

+        </motion.div>

+

+        {/* Filter Buttons */}

+        <motion.div

+          initial={{ opacity: 0, y: 20 }}

+          whileInView={{ opacity: 1, y: 0 }}

+          viewport={{ once: true }}

+          transition={{ duration: 0.6, delay: 0.2 }}

+          className="flex justify-center gap-4 mb-16 flex-wrap"

+        >

+          {["All", "T-Shirts", "Hoodies"].map((category) => (

+            <motion.button

+              key={category}

+              onClick={() => setFilter(category)}

+              whileHover={{ scale: 1.05 }}

+              whileTap={{ scale: 0.95 }}

+              className={`px-8 py-3 rounded-full font-semibold transition-all ${

+                filter === category

+                  ? "bg-gradient-to-r from-gold-500 to-gold-600 text-noir-950 shadow-lg shadow-gold-500/30"

+                  : "glass-card text-gray-300 hover:text-white"

+              }`}

+            >

+              {category}

+            </motion.button>

+          ))}

+        </motion.div>

+

+        {/* Products Grid */}

+        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

+          {filteredProducts.map((product, index) => (

+            <motion.div

+              key={product.id}

+              initial={{ opacity: 0, y: 30 }}

+              whileInView={{ opacity: 1, y: 0 }}

+              viewport={{ once: true }}

+              transition={{ duration: 0.6, delay: index * 0.1 }}

+              onHoverStart={() => setHoveredId(product.id)}

+              onHoverEnd={() => setHoveredId(null)}

+              className="group perspective-1000"

+            >

+              <motion.div

+                className="relative glass-card p-4 h-full transform-3d"

+                whileHover={{ 

+                  rotateY: 5, 

+                  rotateX: -5,

+                  scale: 1.02,

+                }}

+                transition={{ duration: 0.3 }}

+              >

+                {/* Product Image */}

+                <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4">

+                  {/* Glow effect on hover */}

+                  <motion.div

+                    className="absolute -inset-2 bg-gradient-to-r from-gold-500/20 to-gold-600/20 rounded-xl blur-xl"

+                    initial={{ opacity: 0 }}

+                    animate={{ opacity: hoveredId === product.id ? 1 : 0 }}

+                    transition={{ duration: 0.3 }}

+                  />

+                  

+                  <div className="relative w-full h-full holographic">

+                    <Image

+                      src={product.image}

+                      alt={product.name}

+                      fill

+                      className="object-cover transition-transform duration-700 group-hover:scale-110"

+                    />

+                    

+                    {/* Overlay gradient */}

+                    <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-transparent to-transparent" />

+                    

+                    {/* Tag */}

+                    <div className="absolute top-4 left-4 glass-card-gold px-3 py-1 text-xs font-bold text-gold-400">

+                      {product.tag}

+                    </div>

+

+                    {/* Quick view button */}

+                    <motion.div

+                      className="absolute inset-0 flex items-center justify-center"

+                      initial={{ opacity: 0 }}

+                      animate={{ opacity: hoveredId === product.id ? 1 : 0 }}

+                      transition={{ duration: 0.3 }}

+                    >

+                      <motion.button

+                        whileHover={{ scale: 1.1 }}

+                        whileTap={{ scale: 0.9 }}

+                        className="btn-primary text-sm"

+                      >

+                        Quick View

+                      </motion.button>

+                    </motion.div>

+                  </div>

+                </div>

+

+                {/* Product Info */}

+                <div className="space-y-3">

+                  <div className="flex items-start justify-between">

+                    <div>

+                      <h3 className="text-xl font-display font-bold text-white group-hover:text-gradient-gold transition-all">

+                        {product.name}

+                      </h3>

+                      <p className="text-sm text-gray-400 mt-1">

+                        {product.description}

+                      </p>

+                    </div>

+                    <div className="text-xl font-bold text-gradient-gold">

+                      {product.price}

+                    </div>

+                  </div>

+

+                  {/* Size selector */}

+                  <div className="flex gap-2">

+                    {["S", "M", "L", "XL"].map((size) => (

+                      <button

+                        key={size}

+                        className="glass-card px-3 py-1 text-xs hover:bg-white/10 transition-all"

+                      >

+                        {size}

+                      </button>

+                    ))}

+                  </div>

+

+                  {/* Add to cart button */}

+                  <motion.button

+                    whileHover={{ scale: 1.02 }}

+                    whileTap={{ scale: 0.98 }}

+                    className="w-full btn-primary text-sm"

+                  >

+                    Add to Cart

+                  </motion.button>

+                </div>

+

+                {/* 3D effect overlay */}

+                <div className="absolute inset-0 rounded-2xl pointer-events-none">

+                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

+                </div>

+              </motion.div>

+            </motion.div>

+          ))}

+        </div>

+

+        {/* CTA Section */}

+        <motion.div

+          initial={{ opacity: 0, y: 30 }}

+          whileInView={{ opacity: 1, y: 0 }}

+          viewport={{ once: true }}

+          transition={{ duration: 0.6 }}

+          className="mt-20 text-center"

+        >

+          <div className="glass-card-gold p-12 rounded-3xl relative overflow-hidden">

+            <div className="absolute inset-0 holographic" />

+            <div className="relative z-10">

+              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">

+                Can&apos;t Find Your Style?

+              </h3>

+              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">

+                Create your own custom design with our premium customization service

+              </p>

+              <motion.button

+                whileHover={{ scale: 1.05 }}

+                whileTap={{ scale: 0.95 }}

+                className="btn-primary"

+              >

+                Customize Your Own

+              </motion.button>

+            </div>

+          </div>

+        </motion.div>

+      </div>

+    </section>

+  );

+}
