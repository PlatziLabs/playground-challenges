def message_creator(text):
   if text == 'computadora':
      return 'Con mi computadora puedo programar usando Python'
   elif text == 'celular':
      return 'En mi celular puedo aprender usando la app de Platzi'
   elif text == 'cable':
      return '¡Hay un cable en mi bota!'
   else:
      return 'Artículo no encontrado'

text = 'computadora'
response = message_creator(text)
print(response)