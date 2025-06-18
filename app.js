import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Image, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';


const Stack = createNativeStackNavigator(); 

const productos = [
  {
    id: '1',
    nombre: 'Rubor Hermes',
    precio: 1200,
    imagen: 'https://www.ozcosmetics.com.mx/syimages/202105/263348.jpg',
    reseñas: [5, 4, 4, 5],

  },
  {
    id: '2',
    nombre: 'Tinta De Labios Milk',
    precio: 1013,
    imagen: 'https://img.huffingtonpost.es/files/og_thumbnail/uploads/2024/04/24/tinte-labial-milk-jelly-blush-para-labios-y-mejillas-tono-natural-y-duradero.jpeg',
    reseñas: [3, 4, 5],
  },
  {
    id: '3',
    nombre: 'Mascara de pestañas maybelline',
    precio: 158,
    imagen: 'https://bellisima.mx/cdn/shop/products/lash-sensational-sky-high-washable-black-waterproof-mascara-maybelline-4_4.jpg?v=1640031090',
    reseñas: [5, 5, 5, 4],
  },
  {
    id: '4',
    nombre: 'Bissú Maquillaje Polvo Compacto',
    precio: 147,
    imagen: 'https://bissu.com/media/catalog/product/3/0/3057006_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700',
    reseñas: [4, 4, 3],
  },
 {
    id: '5',
    nombre: 'Delineador dibujo y precisión, Encre Noire',
    precio: 1440,
    imagen: 'https://assets.hermes.com/is/image/hermesproduct/delineador-dibujo-y-precision-encre-noire--60574EV001-front-wm-1-0-0-1000-1000_g.jpg',
    reseñas: [4, 4, 3],
  },
 {
    id: '6',
    nombre: 'Base para Maquillaje FPS 15 Mary Kay',
    precio: 330,
    imagen: 'https://pimg.amr.marykaycdn.com/HeroZoom/10004/10051535-Base%20Maquillaje%20FPS15.jpg',
    reseñas: [4, 4, 3],
  },
 {
    id: '7',
    nombre: 'Beauty Creations Luis Torres Paleta de Rostro ',
    precio: 445,
    imagen: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRx2P2eRN1bPwynpzQEnnvzWxRF_tXbv-TZAeX0Jy0fxPS-whaJEOrn3o9djfPi2mxdqTKefbng7xu8IyOZaJtwHnnKE7c1_QQghUZPl-1YPtQ07W8GGu9N4Q',
    reseñas: [4, 4, 3],
  },
 {
    id: '8',
    nombre: 'Colección de maquillaje harry potter',
    precio: 1747,
    imagen: 'https://i0.wp.com/tolucalabellacd.com/wp-content/uploads/2023/09/Coleccion-de-maquillaje-Harry-Potter-1.jpg?fit=1200%2C708&ssl=1',
    reseñas: [4, 4, 3],
  },
   {
    id: '9',
    nombre: 'Set Brochas de Maquillaje Real Techniques',
    precio: 479,
    imagen: 'https://i5.walmartimages.com.mx/gr/images/product-images/img_large/00007962501991L.jpg',
    reseñas: [4, 4, 3],
  },
   {
    id: '10',
    nombre: 'Esponja de maquillaje en polvo puff poliuretano húmedo y seco combinado',
    precio: 363,
    imagen: 'https://i5.walmartimages.com/asr/8a0b7df8-7633-4ff0-91bb-2eaa07fe5aad.39fd377bb9018bc79c044ea4d1108c12.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    reseñas: [4, 4, 3],
  },
   {
    id: '11',
    nombre: 'Kit de lápiz delineador de labios multifunción de 12 piezas, para mujeres para',
    precio: 69,
    imagen: 'https://i5.walmartimages.com/asr/1b925b98-75c5-43f7-877d-120b58bd4a8b.0645d3340bc4e30dc3f2600a802097e9.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    reseñas: [4, 4, 3],
  },
   {
    id: '12',
    nombre: 'Bolsa de Almacenamiento para Brochas de Maquillaje, Soporte para Brochas',
    precio: 411,
    imagen: 'https://i5.walmartimages.com/asr/8dec0af8-7e5b-4d6e-8f13-f8cbd3f35867.e9a74867d814c4bb0d53a62ed0b78ef3.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    reseñas: [4, 4, 3],
  },
   {
    id: '13',
    nombre: 'Mac Sombra En Crema Pro Longwear Paint Pots',
    precio: 548,
    imagen: 'https://sdcdn.io/mac/mx/mac_sku_MPX846_1x1_1.png?width=1080&height=1080',
    reseñas: [4, 4, 3],
  },
   {
    id: '14',
    nombre: 'Paleta de maquillaje de sombras de ojos mate y brillantes de arcoíris',
    precio: 259,
    imagen: 'https://i5.walmartimages.com/asr/a27a0f1c-c0eb-4b0c-bcb4-2f39582bec45.cb17b20cec9271d0dc773d265d43ab94.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
    reseñas: [4, 4, 3],
  },
   {
    id: '15',
    nombre: 'Brillo de Labios Day To Night Gloss + Shimme',
    precio: 640,
    imagen: 'https://blushbarmx.vtexassets.com/arquivos/ids/170145/7506556504144_2.jpg?v=638731637918270000',
    reseñas: [4, 4, 3],
  },
];

function HomeScreen({ navigation }) {
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [menuAbierto, setMenuAbierto] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    Alert.alert('✅ Producto agregado', `${producto.nombre} ha sido agregado al carrito.`);
  };

  const productosFiltrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const promedioEstrellas = (reseñas) => {
    const total = reseñas.reduce((sum, r) => sum + r, 0);
    return Math.round(total / reseñas.length);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#a95aec' }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setMenuAbierto(!menuAbierto)}>
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}>Belleza Premium</Text>
      </View>

      {/* Menú lateral */}
      {menuAbierto && (
        <View style={styles.menuLateral}>
          <View style={{ marginTop: 100 }}>
            <TouchableOpacity onPress={() => setMenuAbierto(false)}>
              <Text style={styles.menuItem}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setMenuAbierto(false);
              navigation.navigate('Carrito', { carrito, setCarrito });
            }}>
              <Text style={styles.menuItem}>🛒 Ir al carrito</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMenuAbierto(false)}>
              <Text style={styles.menuCerrar}>✖️ Cerrar menú</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <ScrollView style={{ marginBottom: 60 }}>
        {/* Buscador */}
        <TextInput
          style={styles.input}
          placeholder="🔍 Buscar productos..."
          value={busqueda}
          onChangeText={setBusqueda}
        />

        {/* Productos destacados */}
        <Text style={styles.subtitulo}>🔥 Productos destacados</Text>
        <FlatList
          data={productos}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detalle', { producto: item, agregarAlCarrito })}
              style={styles.destacadoCard}
            >
        
              <Image source={{ uri: item.imagen }} style={styles.imagenDestacada} />
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text>💲 {item.precio.toFixed(2)}</Text>
              <View style={styles.estrellas}>
                {Array(promedioEstrellas(item.reseñas))
                  .fill()
                  .map((_, i) => (
                    <Text key={i}>⭐</Text>
                  ))}
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Todos los productos */}
        <Text style={styles.subtitulo}>Todos los productos</Text>
        <FlatList
          data={productosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detalle', { producto: item, agregarAlCarrito })}
              style={styles.card}
            >
              <Image source={{ uri: item.imagen }} style={styles.imagen} />
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text>💲 {item.precio.toFixed(2)}</Text>
              <View style={styles.estrellas}>
          
                {Array(promedioEstrellas(item.reseñas))
                  .fill()
                  .map((_, i) => (
                    <Text key={i}>⭐</Text>
                  ))}
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      {/* Botón flotante carrito */}
      <View style={styles.botonFijo}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Carrito', { carrito, setCarrito })}
          style={styles.botonIrCarrito}
        >
          <Text style={styles.textoBoton}>🛒 Ver carrito ({carrito.length})</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function CarritoScreen({ route, navigation }) {
  const { carrito, setCarrito } = route.params;

  const total = carrito.reduce((sum, item) => sum + item.precio, 0);

  const eliminarDelCarrito = (index) => {
    const nuevoCarrito = [...carrito];
    nuevoCarrito.splice(index, 1);
    setCarrito(nuevoCarrito);
    Alert.alert('🗑️ Producto eliminado');
  };

  return (
    <View style={[styles.container, { backgroundColor: '#b27ee7' }]}>
      <Text style={styles.subtitulo}>🛒 Carrito</Text>
      <ScrollView style={{ marginBottom: 60 }}>
        {carrito.length === 0 ? (
          <Text style={{ textAlign: 'center' }}>El carrito está vacío.</Text>
        ) : (
          carrito.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={{ uri: item.imagen }} style={styles.imagen} />
              <Text style={styles.nombre}>{item.nombre}</Text>
              <Text>💲 {item.precio.toFixed(2)}</Text>
              <TouchableOpacity
                onPress={() => eliminarDelCarrito(index)}
                style={[styles.botonAgregar, { backgroundColor: 'purple' }]}
              >
                <Text style={{ color: '#0c0117' }}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
        <View style={styles.carrito}>
          <Text>🧾 Artículos: {carrito.length}</Text>
          <Text>💰 Total: ${total.toFixed(2)}</Text>
        </View>
      </ScrollView>

      {/* Botón flotante Comprar */}
      <View style={styles.botonFijo}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Pago', { total })}
          style={[styles.botonIrCarrito, { backgroundColor: '#610db6' }]}
        >
          <Text style={styles.textoBoton}>💳 Comprar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function PagoScreen({ route }) {
  const { total } = route.params;

  const confirmarPago = (metodo) => {
    Alert.alert('✅ Pago confirmado', `Has pagado $${total.toFixed(2)} con ${metodo}. ¡Gracias por tu compra!`);
  };

  return (
    <View style={[styles.container, { backgroundColor: '#943fe8' }]}>
      <Text style={styles.subtitulo}>💳 Opciones de pago</Text>
      <TouchableOpacity onPress={() => confirmarPago('Tarjeta de crédito')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>Tarjeta de crédito</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => confirmarPago('PayPal')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>PayPal</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => confirmarPago('Transferencia bancaria')} style={styles.botonAgregar}>
        <Text style={{ color: '#fff' }}>Transferencia bancaria</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetalleProductoScreen({ route }) {
  const { producto, agregarAlCarrito } = route.params;

  const promedioEstrellas = (reseñas) => {
    const total = reseñas.reduce((sum, r) => sum + r, 0);
    return Math.round(total / reseñas.length);
    
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: '#b390d3' }]}>
      <Text style={styles.subtitulo}>{producto.nombre}</Text>
      <Image source={{ uri: producto.imagen }} style={styles.imagen} />
      <Text style={{ fontSize: 18, marginBottom: 10 }}>💲 {producto.precio.toFixed(2)}</Text>
      <Text style={{ marginBottom: 10 }}>Descripción: Este es un excelente producto de calidad premium que no te puedes perder.</Text>
      <Text style={styles.subtitulo}>⭐ Reseñas</Text>
      <View style={styles.estrellas}>
        {Array(promedioEstrellas(producto.reseñas))
          .fill()
          .map((_, i) => (
            <Text key={i}>⭐</Text>
          ))}
      </View>
      <View style={{ marginBottom: 20 }}>
        {producto.reseñas.map((r, index) => (
          <Text key={index}>⭐ {r} estrellas - ¡Muy buen producto!</Text>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => agregarAlCarrito(producto)}
        style={[styles.botonAgregar, { backgroundColor: '#570a9d' }]}
      >
        <Text style={{ color: '#fff' }}>🛒 Agregar al carrito</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Carrito" component={CarritoScreen} />
        <Stack.Screen name="Pago" component={PagoScreen} />
        <Stack.Screen name="Detalle" component={DetalleProductoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
header: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  paddingTop: StatusBar.currentHeight || 40, 
  height: 60 + (StatusBar.currentHeight || 40),
  backgroundColor: '#a964ee',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 10,
  elevation: 5,
  zIndex: 1000,
},
menuIcon: {
  fontSize: 30,
  position: '85',
  left: -50,
  color: '#ebe7ee',
},
titulo: {
  fontSize: 24,
  fontWeight: 'bold',
  color:  '#ebe7ee',
},
  input: {
    borderWidth: 1,
    borderColor: '#c7a3f9',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
    marginTop: 100,
  },
  card: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#d0b7e3',
    borderRadius: 5,
    elevation: 2,
  
  },
  imagen: {
    width: '100%',
    height: 200,
    marginBottom: 5,
  },
  imagenDestacada: {
    width: 120,
    height: 120,
    marginBottom: 5,
  },
  nombre: {
    fontWeight: 'bold',
  },
  botonAgregar: {
    backgroundColor: '#570a9d',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    color: '#570a9d',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color:  '#ebe7ee',
  },
  carrito: {
    padding: 10,
    backgroundColor: '#eee',
    marginTop: 10,
  },
  botonFijo: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
  },
  botonIrCarrito: {
    backgroundColor: '#610db6',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold',
  },
  destacadoCard: {
    padding: 10,
    marginRight: 10,
    backgroundColor: '#d0b7e3',
    borderRadius: 5,
    elevation: 2,
    width: 140,
  },
  menuLateral: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 200,
    height: '100%',
    backgroundColor: '#c489f9',
    padding: 10,
    zIndex: 999,
    elevation: 5,
  },
  menuItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  menuCerrar: {
    fontSize: 16,
    color: 'red',
  },
  estrellas: {
    flexDirection: 'row',
    marginVertical: 5,
  },

});
