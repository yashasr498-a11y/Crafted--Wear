+"use client";

+

+import { motion } from "framer-motion";

+

+export default function Footer() {

+  return (

+    <footer className="relative py-20 px-6 border-t border-white/10">

+      <div className="absolute inset-0 marble-texture opacity-20" />

+      

+      <div className="relative max-w-7xl mx-auto">

+        <div className="grid md:grid-cols-4 gap-12 mb-12">

+          {/* Brand */}

+          <div className="space-y-4">

+            <div className="flex items-center gap-3">

+              <div className="relative w-10 h-10 holographic">

+                <div className="absolute inset-0 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg transform rotate-6" />

+                <div className="absolute inset-0 glass-card-gold flex items-center justify-center">

+                  <span className="text-xl font-display font-bold text-gradient-gold">C</span>

+                </div>

+              </div>

+              <div>

+                <h3 className="text-xl font-display font-bold text-gradient-gold">Crafted Wear</h3>

+                <p className="text-xs text-gray-400">LUXURY STREETWEAR</p>

+              </div>

+            </div>

+            <p className="text-sm text-gray-400">

+              Premium customized streetwear for the bold and fearless. Wear your statement.

+            </p>

+            <div className="flex gap-3">

+              {["Instagram", "Twitter", "Facebook"].map((social) => (

+                <motion.button

+                  key={social}

+                  whileHover={{ scale: 1.1, y: -2 }}

+                  whileTap={{ scale: 0.9 }}

+                  className="glass-card w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all"

+                  aria-label={social}

+                >

+                  <span className="text-gold-400">

+                    {social === "Instagram" && "📷"}

+                    {social === "Twitter" && "🐦"}

+                    {social === "Facebook" && "👍"}

+                  </span>

+                </motion.button>

+              ))}

+            </div>

+          </div>

+

+          {/* Shop */}

+          <div>

+            <h4 className="text-white font-semibold mb-4">Shop</h4>

+            <ul className="space-y-2 text-sm text-gray-400">

+              <li><a href="#" className="hover:text-gold-400 transition-colors">New Arrivals</a></li>

+              <li><a href="#" className="hover:text-gold-400 transition-colors">T-Shirts</a></li>

+              <li><a href="#" className="hover:text-gold-400 transition-colors">Hoodies</a></li>

+              <li><a href="#" className="hover:text-gold-400 transition-colors">Accessories</a></li>

+              <li><a href="#" className="hover:text-gold-400 transition-colors">Sale</a></li>

+            </ul>

+          </div>

+

+          {/* Support */}

+          <div>

+            <h4 className="text-white font-semibold mb-4">Support</h4>

+            <ul className="space-y-2 text-sm text-gray-400">

+              <li><a href="#" className="hover:text-gold-400 transition-colors">Contact Us</a></li>

+              <li><a href="#" className="hover:text-gold-400 transition-colors">Size Guide</a></li>

+              <li><a href="#" className="hover:text-gold-400 transition-colors">Shipping Info</a></li>

+              <li><a href="#" className="hover:text-gold-400 transition-colors">Returns</a></li>

+              <li><a href="#" className="hover:text-gold-400 transition-colors">FAQ</a></li>

+            </ul>

+          </div>

+

+          {/* Company */}

+          <div>

+            <h4 className="text-white font-semibold mb-4">Company</h4>

+            <ul className="space-y-2 text-sm text-gray-400">

+              <li><a href="#about" className="hover:text-gold-400 transition-colors">About Us</a></li>

+              <li><a href="#" className="hover:text-gold-400 transition-colors">Careers</a></li>

+              <li><a href="#" className="hover:text-gold-400 transition-colors">Sustainability</a></li>

+              <li><a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a></li>

+              <li><a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a></li>

+            </ul>

+          </div>

+        </div>

+

+        {/* Bottom Bar */}

+        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">

+          <p className="text-sm text-gray-400">

+            © 2025 Crafted Wear. All rights reserved.

+          </p>

+          <div className="flex gap-6 text-sm text-gray-400">

+            <a href="#" className="hover:text-gold-400 transition-colors">Privacy</a>

+            <a href="#" className="hover:text-gold-400 transition-colors">Terms</a>

+            <a href="#" className="hover:text-gold-400 transition-colors">Cookies</a>

+          </div>

+        </div>

+

+        {/* Decorative element */}

+        <motion.div

+          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"

+          animate={{ y: [0, -10, 0] }}

+          transition={{ duration: 3, repeat: Infinity }}

+        >

+          <div className="text-gold-500/20 text-6xl">✦</div>

+        </motion.div>

+      </div>

+    </footer>

+  );

+}
