+"use client";

+

+import { motion } from "framer-motion";

+import Image from "next/image";

+

+export default function About() {

+  return (

+    <section id="about" className="relative py-32 px-6 overflow-hidden">

+      {/* Marble texture background */}

+      <div className="absolute inset-0 marble-texture" />

+      

+      {/* Spotlight effects */}

+      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />

+      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl" />

+

+      <div className="relative max-w-7xl mx-auto">

+        {/* Section Header */}

+        <motion.div

+          initial={{ opacity: 0, y: 20 }}

+          whileInView={{ opacity: 1, y: 0 }}

+          viewport={{ once: true }}

+          transition={{ duration: 0.6 }}

+          className="text-center mb-20"

+        >

+          <motion.div

+            initial={{ opacity: 0, scale: 0.9 }}

+            whileInView={{ opacity: 1, scale: 1 }}

+            viewport={{ once: true }}

+            className="inline-block glass-card-gold px-6 py-2 text-sm text-gold-400 font-semibold mb-6"

+          >

+            OUR STORY

+          </motion.div>

+          

+          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">

+            <span className="text-white">Crafted with </span>

+            <span className="text-gradient-gold">Passion</span>

+          </h2>

+        </motion.div>

+

+        {/* Main Content Grid */}

+        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">

+          {/* Left - Image */}

+          <motion.div

+            initial={{ opacity: 0, x: -30 }}

+            whileInView={{ opacity: 1, x: 0 }}

+            viewport={{ once: true }}

+            transition={{ duration: 0.8 }}

+            className="relative perspective-1000"

+          >

+            <motion.div

+              className="relative transform-3d"

+              whileHover={{ rotateY: -5, rotateX: 5 }}

+              transition={{ duration: 0.3 }}

+            >

+              {/* Glow effect */}

+              <div className="absolute -inset-4 bg-gradient-to-r from-gold-500/20 to-gold-600/20 rounded-3xl blur-2xl" />

+              

+              <div className="relative glass-card-gold p-4">

+                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">

+                  <Image

+                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop"

+                    alt="Crafted Wear Studio"

+                    fill

+                    className="object-cover"

+                  />

+                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950/60 via-transparent to-transparent" />

+                  

+                  {/* Floating badge */}

+                  <motion.div

+                    className="absolute bottom-6 left-6 glass-card-gold p-4"

+                    initial={{ opacity: 0, y: 20 }}

+                    whileInView={{ opacity: 1, y: 0 }}

+                    viewport={{ once: true }}

+                    transition={{ delay: 0.4 }}

+                  >

+                    <div className="text-3xl font-bold text-gradient-gold">2025</div>

+                    <div className="text-xs text-gray-400">EST.</div>

+                  </motion.div>

+                </div>

+              </div>

+            </motion.div>

+          </motion.div>

+

+          {/* Right - Content */}

+          <motion.div

+            initial={{ opacity: 0, x: 30 }}

+            whileInView={{ opacity: 1, x: 0 }}

+            viewport={{ once: true }}

+            transition={{ duration: 0.8 }}

+            className="space-y-6"

+          >

+            <h3 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">

+              Where Luxury Meets Street Culture

+            </h3>

+            

+            <p className="text-lg text-gray-300 leading-relaxed">

+              Crafted Wear was born from a vision to redefine streetwear. We believe that fashion is more than just clothing—it&apos;s a statement, an identity, a form of self-expression.

+            </p>

+            

+            <p className="text-lg text-gray-300 leading-relaxed">

+              Each piece in our collection is meticulously designed and crafted using premium materials, ensuring not just style, but unparalleled comfort and durability. We blend the boldness of street culture with the sophistication of luxury fashion.

+            </p>

+

+            {/* Features */}

+            <div className="grid sm:grid-cols-2 gap-4 pt-6">

+              {[

+                { icon: "✨", title: "Premium Quality", desc: "Finest fabrics & materials" },

+                { icon: "🎨", title: "Bold Designs", desc: "Unique artistic expressions" },

+                { icon: "♻️", title: "Sustainable", desc: "Eco-friendly production" },

+                { icon: "🚀", title: "Limited Drops", desc: "Exclusive collections" },

+              ].map((feature, index) => (

+                <motion.div

+                  key={index}

+                  initial={{ opacity: 0, y: 20 }}

+                  whileInView={{ opacity: 1, y: 0 }}

+                  viewport={{ once: true }}

+                  transition={{ delay: 0.2 + index * 0.1 }}

+                  className="glass-card p-4 hover:bg-white/10 transition-all"

+                >

+                  <div className="text-3xl mb-2">{feature.icon}</div>

+                  <div className="text-white font-semibold mb-1">{feature.title}</div>

+                  <div className="text-sm text-gray-400">{feature.desc}</div>

+                </motion.div>

+              ))}

+            </div>

+          </motion.div>

+        </div>

+

+        {/* Values Section */}

+        <motion.div

+          initial={{ opacity: 0, y: 30 }}

+          whileInView={{ opacity: 1, y: 0 }}

+          viewport={{ once: true }}

+          transition={{ duration: 0.6 }}

+          className="glass-card-gold p-12 rounded-3xl relative overflow-hidden"

+        >

+          <div className="absolute inset-0 holographic" />

+          

+          <div className="relative z-10 text-center max-w-4xl mx-auto">

+            <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">

+              Our Philosophy

+            </h3>

+            <p className="text-xl text-gray-300 leading-relaxed mb-8">

+              &ldquo;We don&apos;t just create clothes. We craft experiences, memories, and statements. Every stitch tells a story, every design carries a message. Wear your truth, wear your passion, wear Crafted.&rdquo;

+            </p>

+            

+            <div className="flex flex-wrap justify-center gap-6 text-sm">

+              <div className="glass-card px-6 py-3">

+                <span className="text-gold-400 font-semibold">Authenticity</span>

+              </div>

+              <div className="glass-card px-6 py-3">

+                <span className="text-gold-400 font-semibold">Innovation</span>

+              </div>

+              <div className="glass-card px-6 py-3">

+                <span className="text-gold-400 font-semibold">Excellence</span>

+              </div>

+              <div className="glass-card px-6 py-3">

+                <span className="text-gold-400 font-semibold">Community</span>

+              </div>

+            </div>

+          </div>

+        </motion.div>

+

+        {/* Stats Section */}

+        <motion.div

+          initial={{ opacity: 0, y: 30 }}

+          whileInView={{ opacity: 1, y: 0 }}

+          viewport={{ once: true }}

+          transition={{ duration: 0.6 }}

+          className="grid md:grid-cols-4 gap-6 mt-20"

+        >

+          {[

+            { number: "10K+", label: "Happy Customers" },

+            { number: "500+", label: "Unique Designs" },

+            { number: "50+", label: "Cities Worldwide" },

+            { number: "4.9/5", label: "Customer Rating" },

+          ].map((stat, index) => (

+            <motion.div

+              key={index}

+              initial={{ opacity: 0, scale: 0.9 }}

+              whileInView={{ opacity: 1, scale: 1 }}

+              viewport={{ once: true }}

+              transition={{ delay: index * 0.1 }}

+              whileHover={{ scale: 1.05 }}

+              className="glass-card p-8 text-center"

+            >

+              <div className="text-4xl md:text-5xl font-bold text-gradient-gold mb-2">

+                {stat.number}

+              </div>

+              <div className="text-sm text-gray-400">{stat.label}</div>

+            </motion.div>

+          ))}

+        </motion.div>

+

+        {/* Newsletter Section */}

+        <motion.div

+          initial={{ opacity: 0, y: 30 }}

+          whileInView={{ opacity: 1, y: 0 }}

+          viewport={{ once: true }}

+          transition={{ duration: 0.6 }}

+          className="mt-20 text-center"

+        >

+          <div className="glass-card p-12 rounded-3xl max-w-3xl mx-auto">

+            <h3 className="text-3xl font-display font-bold text-white mb-4">

+              Join the Movement

+            </h3>

+            <p className="text-gray-300 mb-8">

+              Subscribe to get exclusive drops, early access, and special offers

+            </p>

+            

+            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">

+              <input

+                type="email"

+                placeholder="Enter your email"

+                className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-gold-500/50 transition-all"

+              />

+              <motion.button

+                type="submit"

+                whileHover={{ scale: 1.05 }}

+                whileTap={{ scale: 0.95 }}

+                className="btn-primary whitespace-nowrap"

+              >

+                Subscribe

+              </motion.button>

+            </form>

+          </div>

+        </motion.div>

+      </div>

+    </section>

+  );

+}
